import React, {useState, useCallback, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoDetail from './components/main/video_detail/video_detail';
import VideoList from './components/main/video_list/video_list';


const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);



 const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
 }, []);

 const search = useCallback((query) => {
  setSelectedVideo(null)
    youtube.search(query)
    .then(videos => {
      addThumbnails(videos);
    })
 }, []);


 const addThumbnails = useCallback((videos) => {
  const promises = [];
  videos.forEach(video => {
    promises.push(
     youtube.channel(video.snippet.channelId)
  .then(channelThumbnail => video.channelThumbnail = channelThumbnail));
  })


  Promise.all(promises).then(() => {
     setVideos(videos);
 });

 },[]);

 useEffect(() => {
   youtube.mostPopular()
   .then(videos => {
      addThumbnails(videos); 
   });
  
  }, [youtube]);

 const dipslayType = selectedVideo ? 'list' : 'grid';

const display = selectedVideo ? styles.grid : styles.main;
  return (

    <Router>
      <Header search={search} selectVideo={selectVideo}/>
      <main className={display}>
      <Switch>
        <Route path={['/','/home']} exact>
          <VideoList
                  video={videos}
                  onVideoClick={selectVideo}
                  selectedVideo={selectedVideo}
                  display={dipslayType}
                />
        </Route>
        <Route path='/watch'>
          {         
                selectedVideo && 
                <VideoDetail video={selectedVideo}/>
            }
                <VideoList
                  video={videos}
                  onVideoClick={selectVideo}
                  selectedVideo={selectedVideo}
                  display={dipslayType}
                />
        </Route>
      </Switch>
      </main>
    </Router>
  );
};

export default App;