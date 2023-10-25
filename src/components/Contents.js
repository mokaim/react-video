import React, {useRef} from "react";
import videojs from "video.js";
import VideoJS from "./VideoJs";

export default function Contents()  {

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        poster: 'https://picsum.photos/200',
        sources: [{
            src: 'http://localhost:8080/hls/test/index.m3u8',
            type: 'application/x-mpegURL'
        }],

    };

    const handlePlayerReady = (player) => {

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        }, {});

        player.on('touchstart', (e) => { e.preventDefault() },{passive: false});
        const EVENTS = [
            'loadstart',
            'progress',
            'suspend',
            'abort',
            'error',
            'emptied',
            'stalled',
            'loadedmetadata',
            'loadeddata',
            'canplay',
            'canplaythrough',
            'playing',
            'waiting',
            'seeking',
            'seeked',
            'ended',
            'durationchange',
            'timeupdate',
            'play',
            'pause',
            'ratechange',
            'resize',
            'volumechange',
        ]

        player.on(EVENTS, (e) => { e.preventDefault() },{passive: false});

/*        player.on('dispose', () => {
            videojs.log('player will dispose');
        }, {});*/

    };


    return (
        <div className="content">
            <div className="w3-container w3-center w3-animate-left">
                <h1>Animation is Fun!</h1>
                <p>The w3-animate-left class slides in an element from left.</p>
            </div>

            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
    )
}