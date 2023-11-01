import React from "react";
export default function Header(props){
    return (
        <header>
            <div className="title-bar">
                <button className="menu-icon"
                        type="button"
                        data-toggle="responsive-menu"
                        onClick={() => {
                            props.onClick()
                        }}></button>
                <div className="title-bar-title">Menu</div>
            </div>

            <div className="top-bar">
                <div className="fixed-section">
                    <h5>TITLE</h5>
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
                                <button type="button" className="button">로그인</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    )

}