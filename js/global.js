import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Weather from '../components/Weather'
import Forecast from '../components/Forecast'
// import Editor from '../components/Editor'

// function weatherData() {
//     fetch('api.openweathermap.org/data/2.5/weather?zip=46204,us&units=imperial&APPID=f21c60eaf4b3735aaa9a0c7dff67b7a4')
//     .then(response => response.json())
//     .then(this.updateWeatherData)
//     .then(function(items){
//     console.log(items)
// }


// window.pageText = ''

ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={Weather}></Route>
        <Route path="/forecast" component={Forecast} />
            {/* <Route path="/editor" component={Editor} /> */}

    </Router> //the paths are nested, and this design gives a global navigation bar that will be used by different sites

    , document.getElementById('cms')
)
