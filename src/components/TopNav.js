import React from "react";
import { NavLink } from 'react-router-dom';


export async function loader({ params }) {
    return params
}


export default function TopNav(props) {
    return (
        <aside>
            <div className="sidebar" ref={props.forwardedRef} id={"responsive-menu"}>
                <NavLink to={"/home"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>Home</NavLink>
                <NavLink to={"/news"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>News</NavLink>
                <NavLink to={"/contact"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>Contact</NavLink>
                <NavLink to={"/about"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>About</NavLink>
            </div>
        </aside>
    )
}