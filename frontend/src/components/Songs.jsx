import {Song} from "./Song"
export const Songs=({fn,fn1,allSongs})=>{
    return(<>
    {allSongs.map((currentSong,index)=><Song fn={fn} fn1={fn1} key={index} song ={currentSong}/>)}
    </>)
}