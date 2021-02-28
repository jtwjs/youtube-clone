import React from 'react';
import VideoDetail from '../components/video_detail/video_detail';
import VideoList from '../components/video_list/video_list';
import '../index.css';

const Watch = ({match:{params:{id}}}) => {
  return (
    <main className="main grid">
       <VideoDetail id={id}/>
       <VideoList id={id}/>
    </main>
  );
};

export default Watch;