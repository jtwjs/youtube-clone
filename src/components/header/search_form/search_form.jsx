import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './search_form.module.css';

const SearchForm = ({search,selectVideo}) => {
    const history = useHistory();
    const formRef = useRef();
    const inputRef = useRef();

    const onSubmit =  (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        formRef.current.reset();
        search(value)
        .then((e) => {console.log('2'); console.log(e); history.push('/')})
        .then(() => {console.log('3'); selectVideo()});
        
        

    }

    return (
        <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
            <input  ref={inputRef} className={styles.input} placeholder="검색"/>
            <button className={styles.button}>
                <i className={`${styles.buttonIcon} fas fa-search`}></i>
            </button>
        </form>
    );
};

export default SearchForm;