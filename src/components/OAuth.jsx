import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import $ from 'jquery'
export default function OAuth() {

    const login_modal = useRef(null)
    const close_modal = () => {  //모달창 취소 이벤트
        $(login_modal.current).foundation('close')
    }
        useEffect(() => {
        var naver_id_login = new window.naver_id_login("n1zTuzJ824Xw5MZ0Rad9", "MNDIJexBPq");
        var state = naver_id_login.getUniqState();
        naver_id_login.setButton("", 3,50);
        naver_id_login.setDomain("localhost:3000");
        naver_id_login.setState(state);
        naver_id_login.setPopup();
        naver_id_login.init_naver_id_login();

        const close_btn = document.getElementById("close-btn")
        close_btn.addEventListener('click', close_modal)

        return () => {
            /*close_btn.removeEventListener('click', () => {
                console.log('취소버튼 클릭 이벤트 추가')
            })*/
            close_btn.removeEventListener('click', close_modal)
            console.log('취소버튼 클릭 이벤트 해제')
        }

    },[])

    return (
        <div className="reveal" id="login-reveal" data-reveal data-animation-in="fade-in" data-animation-out="fade-out" ref={login_modal}>
            <div id="naver_id_login"></div>
            <a className={"close"} id={"close-btn"} onClick={() => console.log('qwdwqqwwqwqwq')}></a>
        </div>
    )
}