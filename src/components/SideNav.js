import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SideNav(props) {
    return (
        <aside>
            <div className="sidebar" ref={props.forwardedRef}>
                <a  href={"test"}>Home</a>
                <a href={"test"}>News</a>
                <a href={"test"}>Contact</a>
                <a href={"test"}>About</a>
            </div>
        </aside>
    )
}