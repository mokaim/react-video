import React, {useEffect} from "react";


export default function OAuthRedirect() {

    useEffect(() => {
        console.log('2222')
        window.naver_login = new window.naver_id_login(process.env.REACT_APP_NAVER_CLIENT_ID, process.env.REACT_APP_NAVER_CALLBACK);
        // 접근 토큰 값 출력
        //alert(window.naver_login.oauthParams.access_token);
        // 네이버 사용자 프로필 조회
        window.naverSignInCallback()
        window.naver_login.get_naver_userprofile("window.naverSignInCallback()");
        // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    }, []);



    return (
        <div>ee</div>
    )
}