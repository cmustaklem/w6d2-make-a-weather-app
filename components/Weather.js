import React from 'react'
import { Link } from 'react-router' //this is a component built into react router and provides an alternative to an href. We want it to change the URL, but not refresh the page.



class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=46260,us&units=imperial&APPID=f21c60eaf4b3735aaa9a0c7dff67b7a4')
        .then(response => response.json())
        .then((weatherFetch)=>{
            this.setState({
                location:weatherFetch.name,
                temp:Math.round(weatherFetch.main.temp),
                condition:weatherFetch.weather[0].description,
            })
            console.log(weatherFetch)
        })
                //I may want to consider breaking up this bit of code into two different chunks of code. It would be better to split this function
    }
    render() {
        var date = moment().format('LLL');
        return <div>

        <div className="container">
        {/* <div className="row">
        <button></button>
        <button></button>
        <button></button>
        </div> */}
        <div className="row">
          <div className=".col-md-6 .col-md-offset-3 text text-center">
                {/* {this.props.children} */}
              <h4>{this.state.location}</h4>
              <h5>{date}</h5>
              <h1>{this.state.temp}&#x2109;</h1>
              <h3>{this.state.condition}</h3>
              {/* <h4>Indianapolis</h4>
              <h5>Date</h5>
              <h1>Temp</h1>
              <h3>condition</h3> */}
          </div>
        </div>

      </div>
      </div>

    }
}

export default Weather
