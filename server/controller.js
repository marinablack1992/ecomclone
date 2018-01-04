module.exports = {
    createListing: (req, res, next) => {
        const db = req.app.get('db');
        const { title, price, color, itemtype, category, productiontype, quantity, itemdesc, seller_id } = req.body
        db.create_product(title, price, color, itemtype, category, productiontype, quantity, itemdesc, seller_id)
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(500).send(console.log(err)))
    },
    addPhoto: (req, res, next) => {
        const db = req.app.get('db');
        const { image_url, product_id } = req.body;
        db.create_image([image_url, product_id])
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(500).send(console.log(err)))
    },
    getProduct: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.get_product([id])
            .then((data) => {
                let images = data.map(product => product.image_url)
                let productObj = {
                    product_id: data[0].product_id,
                    title: data[0].title,
                    rating: data[0].rating,
                    reviewcount: data[0].reviewcount,
                    price: data[0].price,
                    color: data[0].color,
                    itemtype: data[0].itemtype,
                    category: data[0].category,
                    productiontype: data[0].productiontype,
                    quantity: data[0].quantity,
                    itemdesc: data[0].itemdesc,
                    seller_id: data[0].seller_id,
                    image_id: data[0].image_id,
                    image_urls: images
                }
                res.status(200).send(productObj)
            })
            .catch((err) => res.status(500).send(console.log(err)))
    },
    getProducts: (req, res, next) => {
        const db = req.app.get('db');
        db.get_products()
        .then((data) => {
            let productsArr = []
            let products = data.map((element, index, array) => {
                let images = data.map((element2, index2, array2) => {
                    if (element2.product_ref === element.product_id){
                        return element2.image_url
                    }
                })
                return productObj = {
                    product_id: data[index].product_id,
                    title: data[index].title,
                    rating: data[index].rating,
                    reviewcount: data[index].reviewcount,
                    price: data[index].price,
                    color: data[index].color,
                    itemtype: data[index].itemtype,
                    category: data[index].category,
                    productiontype: data[index].productiontype,
                    quantity: data[index].quantity,
                    itemdesc: data[index].itemdesc,
                    seller_id: data[index].seller_id,
                    image_id: data[index].image_id,
                    image_urls: images.filter(element => {
                        if (element){
                            return element
                        }
                    })
                }
            })
            let uniqueArray = Array.from(new Set(products))
            res.send(uniqueArray)
        })
    }

}