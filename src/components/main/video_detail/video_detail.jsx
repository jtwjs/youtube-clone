import React from 'react';
import styles from './video_detail.module.css';


const VideoDetail = ({video, video:{snippet}, video:{channelThumbnail}, video:{rating}}) => {
    console.log(rating);
    return (
        <section className={styles.watch}>
            <iframe className={styles.video}
                    title="player"
                    type="text/html" 
                    width="100%" 
                    height="500px"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0" 
                    allowFullScreen>
            </iframe>
          <dl className={styles.info}>
            <dt className={styles.infoTop}>
                <h2 className={styles.title}>
                    {snippet.title}
                </h2>
                <div className={styles.metadata}>
                    <div className={styles.metaDataLeft}>
                        <span className={styles.views}>조회수 27,587회</span>
                        <span className={styles.registDate}>2020. 12. 16.</span>
                    </div>
                    <div className={styles.metaDataRight}>
                        <button className={styles.likeBtn}>
                            <i className={`${styles.metaIcon} fas fa-thumbs-up`}></i>
                            <span className={styles.metaText}>155</span>
                        </button>
                        <button className={styles.likeBtn}>
                            <i className={`${styles.metaIcon} fas fa-thumbs-down`}></i>
                            <span className={styles.metaText}>55</span>
                        </button>
                    </div>
                </div>
            </dt>
            <dd className={styles.infoBottom}>
                <div className={styles.infoBottomTop}>
                    <div className={styles.channel}>
                        <div className={styles.avatar}>
                            <img src={channelThumbnail} alt="channel tumbanil"/>
                        </div>
                        <div className={styles.channelInfo}>
                            <span className={styles.channelName}>
                                {snippet.channelTitle}
                            </span>
                            <span className={styles.subscriber}>
                                구독자 544명
                            </span>
                        </div>
                    </div>
                        <button className={styles.subscribeBtn}>
                        구독
                        </button>
                </div>
                <div className={styles.infoBottomBottom}>
                    <div className={styles.detail}>
                        {snippet.description}
                    </div>
                </div>
                
            </dd>
        </dl>
    </section>
    );
};

export default VideoDetail;