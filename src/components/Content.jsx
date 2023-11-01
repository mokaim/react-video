import React, {useRef} from "react";
import videojs from "video.js";
import VideoJs from "./VideoJs";

export default function Content()  {

    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        poster: 'https://picsum.photos/200',
        sources: [{
            src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
            type: 'application/x-mpegURL'
        }],

    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };


    return (
        <div className="content">
            <div className="w3-container w3-center w3-animate-left">
                <h1>Animation is Fun!</h1>
                <p>The w3-animate-left class slides in an element from left.</p>
            </div>

            <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
    )
}