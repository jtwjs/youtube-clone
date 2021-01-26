import React, {memo } from 'react';
import styles from './video_item.module.css';
const VideoItem = memo(
    ({video, video:{snippet}, onVideoClick, video:{channelThumbnail}}) => {
        console.log(channelThumbnail);
        return (
            <div className={styles.column} onClick={() => onVideoClick(video)}>
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
    }
);

export default VideoItem;