import React, { Component } from 'react';
import router from './router.js';
import {getUserInfo} from './ducks/reducer.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'


class App extends Component {

  componentDidMount(){
    this.props.getUserInfo()
  }
  
    render() {
      console.log('app', this.props.user)
      return (
        <div className="App">
          {router}
        </div>
      );
    }
  }

  function mapStateToProps(state){
    return {
      user: state.user,
    }
  }

  const mapDispatchToProps = {
    getUserInfo: getUserInfo
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps )(App));