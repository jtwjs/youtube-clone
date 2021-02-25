import React from 'react';
import VideoDetail from '../video_detail/video_detail';
import VideoList from '../video_list/video_list';
import styles from './detail.module.css';

const Detail = ({selectedVideo, videos, selectVideo}) => {
  return (
    <>
       <VideoDetail video={selectedVideo}/>
       <VideoList
                  videos={videos}
                  onVideoClick={selectVideo}
                  selectedVideo={selectedVideo}
                />
    </>
  );
};

export default Detail;