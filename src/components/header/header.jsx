import React, {memo} from 'react';
import styles from './header.module.css';
import Logo from './logo/logo';
import SearchForm from './search_form/search_form';

const Header = memo(({search, selectVideo,loadPopularVideo}) => {
    return (
        <header className={styles.header}>
            <Logo selectVideo={selectVideo} loadPopularVideo={loadPopularVideo}/>
            <SearchForm search={search} selectVideo ={selectVideo}/>
        </header>    
    );
});

export default Header;