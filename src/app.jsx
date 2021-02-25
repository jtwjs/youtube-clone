import React, {useState, useCallback, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Detail from './components/main/detail/detail';
import VideoList from './components/main/video_list/video_list';


const App = ({youtube}) => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback((video = null) => {
    setSelectedVideo(video);
 }, []);

 const search = useCallback(async (query) => {
   const videos = await youtube.search(query)
    await addThumbnails(videos);
    }, []);
  

 const addThumbnails = useCallback(async (videos) => {
   console.log('설마');
  const promises = [];
  await videos.forEach(video => {
    promises.push(
     youtube.channel(video.snippet.channelId)
  .then(channelThumbnail => video.channelThumbnail = channelThumbnail));
  })

  await Promise.all(promises).then(() => {
    console.log('1-2');
     setVideos(videos);
 });

 },[]);

 const loadPopularVideo = useCallback(() => {
  youtube.mostPopular()
  .then(videos => {
     addThumbnails(videos); 
  });
 }, []);

 useEffect(() => {   
   loadPopularVideo();
  
  }, [youtube]);

const display = selectedVideo ? styles.grid : styles.main;
  return (

    <Router>
      <Header search={search} selectVideo={selectVideo} loadPopularVideo={loadPopularVideo}/>
      <main className={display}>
      <Switch>
        <Route path={['/','/home']} exact render={() => <VideoList videos={videos}
                  onVideoClick={selectVideo}
                  selectedVideo={selectedVideo}/>}/>
        <Route path='/watch'
               render={() => <Detail selectedVideo={selectedVideo}
                      videos={videos}
                      selectVideo={selectVideo}/>}
          />
      </Switch>
      </main>
    </Router>
  );
};

export default App;