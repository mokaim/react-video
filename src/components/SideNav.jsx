import React from "react";
import { NavLink, useLoaderData } from 'react-router-dom';


export async function loader({ params }) {
    return params
}


export default function SideNav(props) {
    const params = useLoaderData()
    console.log('params : ' + JSON.stringify(params))
    return (
        <aside>
            <div className="sidebar" ref={props.forwardedRef} id={"responsive-menu"} data-toggler={""} data-animate="fade-in fade-out">
                <NavLink to={"/home"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>Home</NavLink>
                <NavLink to={"/news"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>News</NavLink>
                <NavLink to={"/contact"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>Contact</NavLink>
                <NavLink to={"/about"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>About</NavLink>
            </div>
        </aside>
    )
}