import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({video, onVideoClick, display}) => {
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
        <section className={displayType}>
           {
               video.map(video => 
                <VideoItem key={video.id} onVideoClick={onVideoClick} video={video}/>)
           } 
        </section>
    );
};

export default VideoList;