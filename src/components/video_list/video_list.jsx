import React, {memo} from 'react';
import {connect} from 'react-redux';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = memo(({videoList, id}) => {
    
    return (
        <section className={id ? styles.list : styles.grid}>
           {
               videoList.map(video => 
                <VideoItem key={video.id} video={video}/>)
           } 
        </section>
    );
});

const mapStateToProps = (state) => {
    return {
      videoList: state.videoList.data
    }
  }

export default connect(mapStateToProps)(VideoList);