import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import VideoPlayer from './Components/VideoPlayer';
import VideoList from './Components/VideoList';
import YTSearch from 'youtube-api-search';
import { useState, useEffect } from 'react';


function App() {

  const [videosData, setVideosData] = useState({
    videos: [],
    selectedVideo: null
  });

  useEffect(
    () => {
      YTSearch({ term: 'digital lync', key: 'AIzaSyB9IiXo3-sPL6sj-N5CMJKq2l5oEDmOVio' }, (data) => {
        console.log("data", data);
        setVideosData({ ...videosData, videos: data });
      })
    },
    []
  )
  return (
    <div className="App">

      {videosData.videos.length}

      <VideoList videos={videosData.videos}></VideoList>

    </div>
  );
}
//AIzaSyB9IiXo3-sPL6sj-N5CMJKq2l5oEDmOVio 
//AIzaSyAGxeJpOE--JNITirOeE8nu__ljNwRvIvQ

export default App;
