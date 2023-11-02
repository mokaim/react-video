import './App.css';

import 'what-input/dist/what-input.min'
import 'foundation-sites/dist/js/foundation.min'
import 'motion-ui/dist/motion-ui.min'

//import './custom-style/scss/includes.scss'
import './custom-style/main.css'
import './custom-style/main'
import './custom-style/scss/animation.scss'

import Background from './components/Background'
import {redirect} from "react-router-dom";

export async function loader() {
    if (window.location.pathname === "/") {
        return redirect(`/home`)
    }
}

function App() {

    const Jquery = require('jquery')

    Jquery(document).ready($ => {
        $(document).foundation()
    })

    return (
        <div className="App">
            <Background></Background>
        </div>

    );
}

export default App;
