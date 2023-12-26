import React from "react";
// import useSound from "use-sound";
import { useState, useEffect, useRef } from "react";
// import Koyal from "./Koyal.mp3";


const Thala = () => {

    const [text, setText] = useState("");

    const videoRef = useRef();

    const PlayThala = () =>{
        if(text === 7){
            return true;
        }
        else if(String(text)){
            if(text === "7"){
            return true;
        }
        
        else if(text.length === 7){
           return true;
        }
        }
        
    }


    const play = () => {
        if(PlayThala()){
            videoRef.current.play();
        }
    }

    const pause = () => {
        videoRef.current.pause();
    }

    const clear = () => {
        setText("");
    }


    return (
        <div>
            <music>
                <input type="text" className="thala-likho" value={text} onChange={(e) => setText(e.target.value)} />
                <br/>
                <button type="button" className="thala" onClick={clear}>Clear</button>
                <br/>
                <button className="thala" onClick={play}>Check</button>
                <button className="thala" onClick={pause}>Pause</button>
            </music>
            <br />
            <br />
            <video width={600} height={340} ref={videoRef} className="video-thala">
                <source src="/Video/Thala.mp4" />
            </video>            
        </div>
    )
}

export default Thala;