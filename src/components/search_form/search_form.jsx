import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {requestSearchData} from '../../store/videos';
import styles from './search_form.module.css';

const SearchForm = ({search}) => {
    const history = useHistory();
    const formRef = useRef();
    const inputRef = useRef();

    const onSubmit =  async (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        formRef.current.reset();
        await search(value);
        history.push('/');
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

const mapDispatchToProps = (dispatch) => {
    return {
        search: (value) => dispatch(requestSearchData(value))
    }
}

export default connect(null, mapDispatchToProps)(SearchForm);