import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'


class Forecast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=indianapolis,us&units=imperial&APPID=f21c60eaf4b3735aaa9a0c7dff67b7a4')
        .then(response => response.json())
        .then((weatherFetch)=>{
            this.setState({
                // location:weatherFetch.name,
                // temp:Math.round(weatherFetch.main.temp),
                // condition:weatherFetch.weather[0].main,
            })
            console.log(weatherFetch)
        })

    }
    render() {
        var date = moment().format('MMMM Do YYYY, h:mm:ss a');
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
              {/* <h4>{this.state.location}</h4>
              <h5>{date}</h5>
              <h1>{this.state.temp} &#x2109;</h1>
              <h3>{this.state.condition}</h3> */}
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

export default Forecast

// class Page extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = sharedState()
// }
// componentDidMount() {
//     attachSharedState(this)
// }
//
// componentWillMount() {
//     detachSharedState(this)
// }
// render() {
//     return <div className=".col-md-6 .col-md-offset-3 text text-center">
//     <h4>Indianapolis, IN</h4>
//     <h5>Date and Time</h5>
//     <h5>Temp Monday</h5>
//     <h5>Temp Tuesday</h5>
//     <h5>Temp Wednesday</h5>
//     <h5>Temp Thursday</h5>
//     <h5>Temp Friday</h5>
//
//     </div>
// }
//
// }
//
// export default Page
