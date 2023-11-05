import React from "react";

import {Link} from "react-router-dom";


export default function Contents() {


    return (

        <div className={"content"}>

            <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="off-canvas-content" data-off-canvas-content="">

                    <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
                        <div className="orbit-wrapper">
                            <div className="orbit-controls">
                                <button className="orbit-previous"><span
                                    className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                                <button className="orbit-next"><span
                                    className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                            </div>
                            <Link to={"/home/video/1"}>
                                <ul className="orbit-container">
                                    <li className="is-active orbit-slide">
                                        <figure className="orbit-figure">
                                            <img className="orbit-image"
                                                 src={"https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg"}
                                                 alt="Space"/>
                                            <figcaption className="orbit-caption">Space, the final frontier.
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li className="orbit-slide">
                                        <figure className="orbit-figure">
                                            <img className="orbit-image"
                                                 src={"https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg"}
                                                 alt="Space"/>
                                            <figcaption className="orbit-caption">Lets Rocket!</figcaption>
                                        </figure>
                                    </li>
                                    <li className="orbit-slide">
                                        <figure className="orbit-figure">
                                            <img className="orbit-image"
                                                 src={"https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg"}
                                                 alt="Space"/>
                                            <figcaption className="orbit-caption">Encapsulating</figcaption>
                                        </figure>
                                    </li>
                                    <li className="orbit-slide">
                                        <figure className="orbit-figure">
                                            <img className="orbit-image"
                                                 src={"https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg"}
                                                 alt="Space"/>
                                            <figcaption className="orbit-caption">Outta This World</figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </Link>
                        </div>
                        <nav className="orbit-bullets">
                            <button className="is-active" data-slide="0">
                                <span className="show-for-sr">First slide details.</span>
                                <span className="show-for-sr" data-slide-active-label>Current Slide</span>
                            </button>
                            <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
                            <button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
                            <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>
                        </nav>
                    </div>
                </div>

                <div className="row small-up-2 medium-up-3 large-up-4">
                    <Link to={"/home/video/1"} className={"column"}>
                        <img className="thumbnail" src={"/test/1.png"} alt={""}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/2"} className={"column"}>
                        <img className="thumbnail" src={"/test/2.png"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/3"} className={"column"}>
                        <img className="thumbnail" src={"/test/3.png"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/4"} className={"column"}>
                        <img className="thumbnail" src={"/test/dog_1.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/5"} className={"column"}>
                        <img className="thumbnail" src={"/test/dog_2.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/6"} className={"column"}>
                        <img className="thumbnail" src={"/test/dog_3.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/7"} className={"column"}>
                        <img className="thumbnail" src={"/test/music_1.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/8"} className={"column"}>
                        <img className="thumbnail" src={"/test/music_2.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/9"} className={"column"}>
                        <img className="thumbnail" src={"/test/panda_1.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/10"} className={"column"}>
                        <img className="thumbnail" src={"/test/panda_2.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/11"} className={"column"}>
                        <img className="thumbnail" src="https://placehold.it/550x550"/>
                        <h5>My Site</h5>
                    </Link>

                </div>

            </div>


        </div>


    )
}