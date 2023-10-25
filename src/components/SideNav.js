import React from "react";

export default function SideNav(props) {
    return (
        <aside>
            <div className="sidebar" ref={props.forwardedRef}>
                <a className="active" href={"test"}>Home</a>
                <a href={"test"}>News</a>
                <a href={"test"}>Contact</a>
                <a href={"test"}>About</a>
            </div>
        </aside>
    )
}