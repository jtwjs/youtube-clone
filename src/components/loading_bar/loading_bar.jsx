import React from 'react';
import styles from './loading_bar.module.css';

const LoadingBar = () => {
  return (
    <div className={styles.bar}>
      <span className={styles[`loading-bar`]}>
      </span>
    </div>
  );
};

export default LoadingBar;