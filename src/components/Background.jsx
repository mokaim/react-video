import React, {useRef, useState, useEffect} from "react";
import Header from './Header'
import SideNav from './SideNav'
import Content from './Content'
import Contents from './Contents'


//import MotionUI from "motion-ui";

export default function Background() {
    const menuBarRef = useRef(null)
    const [toggle, setToggle] = useState(false)
    //window.addEventListener('resize', () => { !toggle ? document.getElementById('responsive-menu').style.display = 'flex' : document.getElementById('responsive-menu').style.display = 'none' })

    useEffect(() => {
        menuBarRef.current.style.display = 'none'
    },[])

    return (
        <div>
            <Header onClick={() => {
                menuBarRef.current.style.visibility = 'visible'
                if (toggle) {
                    menuBarRef.current.style.display = 'flex'
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