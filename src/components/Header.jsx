import React from "react";
import {Link} from "react-router-dom";
export default function Header(props){
    return (
        <header>
            <div className="title-bar">
                <button className="menu-icon"
                        id={"menu-icon"}
                        type="button"
                        data-toggle="responsive-menu"
                        onClick={() => {
                            console.log('onClick 실행')
                            props.onClick()
                        }}></button>
                <div className="title-bar-title">Menu</div>
            </div>

            <div className="top-bar">
                <div className="fixed-section">
                    <Link to={"/home"}><h5>{process.env.REACT_APP_TITLE}</h5></Link>

                </div>

                <div className="flex-section">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="search-bar">
                                <input id="search" type="search" placeholder="Search"/>
                            </li>
                            <li className="search-btn">
                                <button type="button" className="button">검색</button>
                            </li>
                        </ul>
                    </div>

                    <div className="top-bar-right">
                        <ul className="menu">
                            <li className="search-btn">
                                <button type="button" className="button" data-toggle="login-reveal">로그인</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    )

}