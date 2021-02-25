import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './logo.module.css';

const Logo = ({selectVideo,loadPopularVideo}) => {
    const history = useHistory();
    
    return (
        <div className={styles.logo}>
            <a href="#a" onClick={(e) => {
                e.preventDefault();
                loadPopularVideo();
                history.push('/')
                selectVideo();
        }}>
                <img className={styles.img} src="/assets/img/youtube_icon.svg" alt="youtube logo"/>
                <h1 className={styles.title}>Premium</h1>
                <span className={styles.countryCode}>kr</span>  
            </a>
        </div>
    );
};

export default Logo;