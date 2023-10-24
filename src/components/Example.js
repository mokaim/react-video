import {useRef} from 'react';
export default function Example() {


    let ref = useRef(null); // MutableRefObject 를 반환하는 useRef 함수를 호출한다

    return (
        <div>
            <h1 id="test-h1" ref={ref}>Do not click yet</h1>

            {/* 일반 Document 객체로 접근하는 버튼 */}
            <button className={"submit success button"}
             onClick={() => {
                 document.getElementById('test-h1').innerText = "일반 document 객체로 수정함"
             }}
            >일반 document 객체로 수정버튼</button><br/>

            {/* 리액트 Ref Props 속성으로 접근하는 버튼 */}
            <button className={"submit success button"}
                    onClick={() => {
                        ref.current.innerText = "ref prop 으로 수정함"
                    }}
            >ref 으로 수정버튼</button>

        </div>
    )
}
