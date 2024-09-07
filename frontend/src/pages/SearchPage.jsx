import {Search} from "../components/Search";
import {Songs} from "../components/Songs";
import {getSongs} from "../services/api-client";
import {useEffect,useState} from "react";
import {Player} from "../components/Player";
import {Liked} from "../components/Liked";
import {apiClient} from "../services/api-client2";

export const SearchPage =()=>{
    const [allSongs,setSongs] = useState([]);
    const [flag,setFlag]= useState(0);
    const [song,setPlayerSong] =useState(null);
    const loadSongs=async()=>{
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect(()=>{
        loadSongs();
    },[])


    const togglePlayer=(flag,songArg)=>{
        setPlayerSong(songArg);
        setFlag(flag);

    }
    const saveSong= async (lsong)=>{
        try{
            const LikeData ={
                trackName :lsong?.trackName,
                artistName :lsong?.artistName,
                artworkUrl100 :lsong.artworkUrl100,
                previewUrl :lsong?.previewUrl
            }
            const response = await apiClient.post('http://localhost:1234/like', LikeData);
            console.log(response);
        }
        catch(err){
            console.log('Error like ', err);
        }
    }
    const getArtistName = async (artistName)=>{
       setSongs(await getSongs(artistName));

    }
    const getLikeSong =()=>{
        setFlag(2);
    }
    const jsx=<> <Search fn={getArtistName}/>
    <div className="space">
  </div>
    <button onClick={getLikeSong} className="btn btn-outline-danger">LIKED SONGS</button>
    <Songs fn={togglePlayer} fn1={saveSong} allSongs={allSongs}/></>;
    return(<div className="container">
        <h1 class="text-warning" className="alert alert-dark text-center bs-light-border-subtle">BEATBUDDY</h1>
    
        {flag===1?<Player fn={togglePlayer} song={song}/>:flag===0?jsx:<Liked fn={togglePlayer} fn1={saveSong} allSongs={allSongs}/>}
       
    </div>)
}