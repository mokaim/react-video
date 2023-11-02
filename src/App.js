import './App.css';

import 'what-input/dist/what-input.min'
import 'foundation-sites/dist/js/foundation.min'
import './custom-style/main.css'
import './custom-style/main'

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
