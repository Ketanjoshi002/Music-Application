export const Liked2=({fn,fn1,song})=>{
    const showPlayer=()=>{
        fn(1,song);
    }
    const likeSong=()=>{
        fn1(song);
    }
    return (<div class="p-3 mb-2 bg-warning text-white">
    <div className='row'>
        <div className='col-4'>
            <img src = {song.artworkUrl100}/></div>
            <div className='col-4'>
            <p class="text-primary">
               <h6>ARTIST NAME : {song.artistName} </h6>
               <h6>TRACK NAME :{song.trackName} </h6>
               </p>
            </div>
            <div className='col-4'>
                <button onClick={showPlayer} className="btn btn-outline-danger me-1">PLAY SONG</button>
                
            </div>
            </div></div>)
}