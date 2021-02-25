import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({videos, onVideoClick,selectedVideo}) => {
    
    return (
        <section className={selectedVideo ? styles.list : styles.grid}>
           {
               videos.map(video => 
                <VideoItem key={video.id} onVideoClick={onVideoClick} video={video}/>)
           } 
        </section>
    );
};

export default VideoList;