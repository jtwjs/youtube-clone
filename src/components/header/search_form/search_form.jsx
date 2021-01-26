import React, {useRef} from 'react';
import styles from './search_form.module.css';

const SearchForm = ({search}) => {
        const formRef = useRef();
        const inputRef = useRef();
    
        const onSubmit = (e) => {
            const value = inputRef.current.value;
            e.preventDefault();
            search(value);
            formRef.current.reset();
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