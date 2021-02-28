import React from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import {select} from '../../store/video';
import styles from './video_item.module.css';

const VideoItem = ({selectVideo, video, video:{snippet}, video:{channelThumbnail}}) => {
        const history = useHistory();
        const onClick = () => {
            selectVideo(video);
            history.push(`/watch/${video.id}`);
            window.scrollTo({top:0});
        }
        return (
            <div className={styles.column} onClick={onClick}>
                <dl className={styles.content}>
                    <dt className={styles.thumbnail}>
                        <img src={snippet.thumbnails.medium.url} alt="video thumbnail"/>
                    </dt>
                    <dd className={styles.info}>
                        <div className={styles.avatar}>
                            <img src={channelThumbnail} alt="channel thubmnail"/>
                        </div>  
                        <div className={styles.detail}>
                            <h2 className={styles.title}>
                                {snippet.title}
                            </h2>
                            <div className={styles.byline}>
                                <span className={styles.channel}>
                                    {snippet.channelTitle}
                                </span>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        );
    };

const mapDispatchToProps = (dispatch) => {
    return {
        selectVideo: (video) => dispatch(select(video))
    };
}

export default connect(null,mapDispatchToProps)(VideoItem);