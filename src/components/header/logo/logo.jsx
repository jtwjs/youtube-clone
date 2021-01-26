import React from 'react';
import styles from './logo.module.css';

const Logo = (props) => {

    const handleClick = () => {
        window.location.reload();
    }

    return (
        <div className={styles.logo} onClick={handleClick}>
            <a href="#a">
                <img className={styles.img} src="/assets/img/youtube_icon.svg" alt="youtube logo"/>
                <h1 className={styles.title}>Premium</h1>
                <span className={styles.countryCode}>kr</span>  
            </a>
        </div>
    );
};

export default Logo;