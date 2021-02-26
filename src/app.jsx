import React, {useEffect} from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {requestPopularData} from './store/videos';
import Header from './components/header/header';
import Home from './pages/home';
import Watch from './pages/watch';


const App = ({mostPopular, isFetching}) => {

 useEffect(() => {   
  mostPopular();
  
  }, [mostPopular]);

  return (

    <Router>
      <Header/>
      <Route path={['/','/home']} exact component={Home}/>
      <Route path='/watch/:id' component={Watch}/>
    </Router>
  );
};



const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.videos.isFetching
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    mostPopular: () => dispatch(requestPopularData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);