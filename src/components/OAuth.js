import React, {useEffect} from "react";

export default function OAuth() {

    useEffect(() => {
        var naver_id_login = new window.naver_id_login("n1zTuzJ824Xw5MZ0Rad9", "MNDIJexBPq");
        var state = naver_id_login.getUniqState();
        naver_id_login.setButton("", 3,50);
        naver_id_login.setDomain("localhost:3000");
        naver_id_login.setState(state);
        naver_id_login.setPopup();
        naver_id_login.init_naver_id_login();
    },[])

    return (

    <div className="reveal" id="login-reveal" data-reveal data-close-on-click="true" data-animation-in="fade-in" data-animation-out="fade-out">
        <div id="naver_id_login"></div>
    </div>
    )
}