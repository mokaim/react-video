import React, {useRef, useState} from "react";
import Header from './Header'
import SideNav from './SideNav'
import Content from './Content'
import Contents from './Contents'

//import MotionUI from "motion-ui";

export default function Background() {
    const menuBarRef = useRef(null)
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <Header onClick={() => {
                if (toggle) {
                    //MotionUI.animateIn(menuBarRef.current, 'fade-in');
                } else {
                    //MotionUI.animateOut(menuBarRef.current, 'fade-out');
                }
                setToggle(!toggle)
            }}></Header>
            <section>
                <SideNav forwardedRef={menuBarRef}></SideNav>
                <Contents></Contents>
            </section>
        </div>
    );

}