import React, { useEffect, useState } from 'react';
import { api_key, videoListAPIEndpoint } from '../constants/yt-apis';
import VideoCard from './VideoCard';


const Body = () => {
  const [videoListAPIResponse,setVideoListAPIResponse] = useState([]);
  const callYoutubeAPI = async ()=>{
    try{
      const response = await fetch(videoListAPIEndpoint+api_key);
      const json = await response.json();
      
      setVideoListAPIResponse(prev =>[...Object.values(json?.items)])
    }
    catch(error){
      console.error("Failed to fetch video details:", error)
    }
    
    
  }
  useEffect(()=>{
    callYoutubeAPI();
  },[]);
  
  return (
    // <div className='bg-gray-200'>Body</div>
    // <VideoCard keys={0} item={videoListAPIResponse[0]} />
    <div className='w-full flex flex-wrap justify-start gap-4 overflow-y-auto'>
      {videoListAPIResponse.map((itm,idx)=> <VideoCard key={idx} item={itm} />)}
    </div>
    
    
    
  )
}

export default Body