import Yeti from './yeti.svg'
import {useRef, useEffect} from 'react';
import MotionUI from 'motion-ui'

export default function Test2() {

    let ref = useRef(null);


    let ref2 = useRef(null);

    useEffect(() => {
        //const element = ref.current;
        const element2 = ref2.current;

        console.log(element2.value);
    }, []);

    return (
        <div className="row">
            <div className="small-12 columns">
                <h1>Motion UI</h1>
                <p className="lead">Thanks for trying out Motion UI! Here are all of the pre-set transitions to get you
                    started.</p>

                <div className="row">
                    <div className="medium-8 medium-push-4 columns">
                        <img id="yeti" src={Yeti} alt={"test"}  ref={ref}/>
                    </div>
                    <div className="medium-4 medium-pull-8 columns">
                        <select id="transitionList" ref={ref2}>
                            <option value="slide-in-up">slide-in-up</option>
                            <option value="slide-in-right">slide-in-right</option>
                            <option value="slide-in-down">slide-in-down</option>
                            <option value="slide-in-left">slide-in-left</option>
                            <option value="fade-in">fade-in</option>
                            <option value="spin-in">spin-in</option>
                            <option value="spin-in-ccw">spin-in-ccw</option>
                            <option value="scale-in-up">scale-in-up</option>
                            <option value="scale-in-down">scale-in-down</option>
                            <option value="hinge-in-from-top">hinge-in-from-top</option>
                            <option value="hinge-in-from-right">hinge-in-from-right</option>
                            <option value="hinge-in-from-bottom">hinge-in-from-bottom</option>
                            <option value="hinge-in-from-left">hinge-in-from-left</option>
                            <option value="hinge-in-from-middle-x">hinge-in-from-middle-x</option>
                            <option value="hinge-in-from-middle-y">hinge-in-from-middle-y</option>
                        </select>

                        <button id="transitioner" className={"submit success button"}
                        onClick={() => {
                            MotionUI.animateIn(ref.current, ref2.current.value);
                        }}
                        >Transition!</button>

                        <button id="transitioner2" className={"submit success button"}
                                onClick={() => {
                                    MotionUI.animateIn(document.getElementById("yeti"), document.getElementById("transitionList").value);
                                }}
                        >Transition!</button>


                        <section>
                            <h4>Learn More</h4>
                            <p>Motion UI includes many pre-made transitions, but the real power of the library is in the
                                Sass. Check out the <a
                                    href="https://github.com/zurb/motion-ui/tree/master/docs">documentation</a> to learn
                                more.</p>
                        </section>


                        <section>
                            <h4>Contribute</h4>
                            <p>Interested in helping us write new effects? Head on over to <a
                                href="https://github.com/zurb/motion-ui">GitHub</a>, pull down the repository, and get
                                coding!</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
