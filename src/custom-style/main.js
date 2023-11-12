window.naver_login = null
window.naverSignInCallback = function () {
    alert('naver id login : ' + JSON.stringify(window.naver_login))
}
/*
element.addEventListener('transitionstart', () => {
    isToggled = !isToggled;

    if (isToggled) {
        let clientHeight = document.getElementById('responsive-menu').clientHeight;
        let test = document.getElementsByClassName('content').item(0)
        test.style.paddingTop = clientHeight + "px"
    } else {
        let clientHeight = 0
        let test = document.getElementsByClassName('content').item(0)
        test.style.paddingTop = clientHeight + "px"
    }

})*/
