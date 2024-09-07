export const Song=({fn,fn1,song})=>{
    const showPlayer=()=>{
        fn(1,song);
    }
    const likeSong=()=>{
        fn1(song);
    }
    return (<div className="p-3 mb-2 bg-warning text-white">
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
                <button onClick={showPlayer} className="btn btn-outline-danger me-3">PLAY SONG</button>
                <button onClick={likeSong} className="btn btn-outline-danger">LIKE</button>
            </div>
            </div>
            </div>)
}