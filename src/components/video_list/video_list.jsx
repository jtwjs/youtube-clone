import React, {memo} from 'react';
import {connect} from 'react-redux';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = memo(({videos, id}) => {
    
    return (
        <section className={id ? styles.list : styles.grid}>
           {
               videos.map(video => 
                <VideoItem key={video.id} video={video}/>)
           } 
        </section>
    );
});

const mapStateToProps = (state) => {
    return {
      videos: state.videos.data
    }
  }

export default connect(mapStateToProps)(VideoList);