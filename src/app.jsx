import React, {useEffect} from 'react';
import './app.css';
import {Router} from 'react-router';
import {Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import history from './util/history';
import {requestPopularData} from './store/video_list';
import Header from './components/header/header';
import Home from './pages/home';
import Watch from './pages/watch';
import LoadingBar from './components/loading_bar/loading_bar';


const App = ({mostPopular, isFetching}) => {
  console.log(isFetching);

 useEffect(() => {   
  mostPopular();
  
  }, [mostPopular]);

  return (
    <Router history={history}>
      {
        isFetching &&
        <LoadingBar/>
      }
      <Header/>
      <Switch>
        <Route path={['/','/home']} exact component={Home}/>
        <Route path='/watch/:id' component={Watch}/>
      </Switch>
    </Router>
  );
};



const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.videoList.isFetching
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    mostPopular: () => dispatch(requestPopularData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);