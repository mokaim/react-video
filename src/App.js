import './App.css';

import 'what-input/dist/what-input.min'
import 'foundation-sites/dist/js/foundation.min'

//import './custom-style/scss/includes.scss'
import './custom-style/main.css'
import './custom-style/main'


import Background from './components/Background'


const Jquery = require('jquery')

function App() {

    Jquery(document).ready($ => {$(document).foundation()})

  return (
    <div className="App">
      <Background></Background>

    </div>

  );
}

export default App;
