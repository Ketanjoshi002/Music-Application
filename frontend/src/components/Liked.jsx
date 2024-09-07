import {Liked2} from "./Liked2";
import React, { useEffect, useState } from 'react'
import {apiClient} from "../services/api-client2";
export const Liked= ({fn,fn1,allSongs})=>{
    
    const [songs,setSong]=useState([])
    const fetchData = async () => {
        try {
          const response = await apiClient.get('http://localhost:1234/like');
          setSong(response.data.message);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    useEffect(()=>{
        fetchData();
  
    },[])

    return(
    <div>
        
        <button onClick={()=>{
            fn(0,null);
        }} className="btn btn-outline-danger">Back to Songs</button>
        <>
        {songs.map((currentSong,index)=><Liked2 fn={fn} fn1={fn1} key={index} song ={currentSong}/>)}
        </>
    </div>)
}