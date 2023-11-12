import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import $ from 'jquery'

export default function OAuth() {

    const login_modal = useRef(null)

    useEffect(() => {
        var naver_id_login = new window.naver_id_login(process.env.REACT_APP_NAVER_CLIENT_ID, process.env.REACT_APP_NAVER_CALLBACK);
        var state = naver_id_login.getUniqState();

        const close_modal = () => {  //모달창 취소 이벤트
            $(login_modal.current).foundation('close')
        }

        //var ww = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=7IbCnCOXeRLfbOpBrIOQ&redirect_uri=http://localhost:3000/about&state=RANDOM_STATE'

        naver_id_login.setButton("", 3, 50);
        naver_id_login.setDomain("http://localhost:3000");
        naver_id_login.setState(state);
        naver_id_login.setPopup();


        naver_id_login.init_naver_id_login();

        const close_btn = document.getElementById("close-btn")
        close_btn.addEventListener('click', close_modal)
        console.log('취소버튼 클릭 이벤트 추가')
        return () => {
            console.log('취소버튼 클릭 이벤트 제거')
            close_btn.removeEventListener('click', close_modal)
        }

    }, [])

    return (
        <div className="reveal" id="login-reveal" data-reveal data-animation-in="fade-in" data-animation-out="fade-out"
             ref={login_modal}>
            <div id="naver_id_login"></div>
            <a className={"close"} id={"close-btn"} onClick={() => console.log('qwdwqqwwqwqwq')}></a>
        </div>
    )
}