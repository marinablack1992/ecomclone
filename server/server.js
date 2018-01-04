require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const ctrl = require('./controller.js')

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('You have successfully connected to the database.')
    app.set('db', db); //the string db
})

// Auth0Setup:
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {

    const db = app.get('db');

    db.find_user([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            console.log('create entry')
            db.create_user([profile._json.name, profile._json.email, profile._json.picture, profile._json.identities[0].user_id]).then(user => {
                return done(null, user[0].id);
            })

        }
    })
}
))

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect:'http://localhost:3000/',
    failureRedirect: '/auth'
}));


app.get('/auth/me', (req, res, next) => {
    console.log('authme req.user', req.user)
    if (!req.user) {
        return res.status(200).send(false)
    }
    return res.status(200).send(req.user);
})

app.get('/auth/logout', ((req, res, next) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/')
}))
//user info gets added to express session at login.
passport.serializeUser(function (id, done) {

    done(null, id)
})

passport.deserializeUser(function (id, done) { //everytime the user wants to go to an endpoint etc, the deserialize checks for a session in the serialize box and then

    app.get('db').find_current_user([id])
        .then(user => {
            console.log('deserialized user', user[0])
            done(null, user[0]); // takes user object from database and puts it on req.user. we can use it on any endpoint now.
        }).catch(err => console.log('deserialize failed', err))
})

//endpoints:

app.post('/api/createlisting', ctrl.createListing)
app.post('/api/addphoto', ctrl.addPhoto)
app.get('/api/product/:id', ctrl.getProduct)
app.get('/api/products', ctrl.getProducts)

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));