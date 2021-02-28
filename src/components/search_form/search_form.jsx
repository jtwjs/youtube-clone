import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {requestSearchData} from '../../store/video_list';
import styles from './search_form.module.css';

const SearchForm = ({search}) => {
    const formRef = useRef();
    const inputRef = useRef();

    const onSubmit =  async (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        formRef.current.reset();
        await search(value);
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