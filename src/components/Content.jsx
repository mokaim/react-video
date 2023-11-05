import React, {useRef, useEffect} from "react";
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="content" id={"detail"}>
            <div className={"row"}>
                <div className="w3-container w3-center w3-animate-left">
                    <h1>HLS 애니메이션</h1>
                </div>

                <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
        </div>
    )
}