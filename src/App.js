import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import useVideos from './hooks/useVideos';

const App = () => {  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]); 
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar 
        onFormSubmit={search}             
      />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails 
              video={selectedVideo} 
            />  
          </div>
          <div className="five wide column">
            <VideoList 

              // == {(video) => setSelectedVideo(video)}
              onVideoSelect={setSelectedVideo} 
              videos={videos}         
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
