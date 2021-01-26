import React, {memo} from 'react';
import styles from './header.module.css';
import Logo from './logo/logo';
import SearchForm from './search_form/search_form';

const Header = memo(({search, selectVideo}) => {
    console.log("HEADER!!!!!!");
    return (
        <header className={styles.header}>
            <Logo selectVideo={selectVideo}/>
            <SearchForm search={search}/>
        </header>    
    );
});

export default Header;