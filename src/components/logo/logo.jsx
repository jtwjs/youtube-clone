import React from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {requestPopularData} from '../../store/videos';
import styles from './logo.module.css';

const Logo = ({mostPopular}) => {
    const history = useHistory();
    
    return (
        <div className={styles.logo}>
            <a href="#a" onClick={(e) => {
                e.preventDefault();
                mostPopular();
                history.push('/')
        }}>
                <img className={styles.img} src="/assets/img/youtube_icon.svg" alt="youtube logo"/>
                <h1 className={styles.title}>Premium</h1>
                <span className={styles.countryCode}>kr</span>  
            </a>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        mostPopular: () => dispatch(requestPopularData())
    }
}
export default connect(null, mapDispatchToProps)(Logo);