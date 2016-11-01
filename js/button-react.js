import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.addCounter = this.addCounter.bind(this)
        this.state = {
            counter: 0
        }
    }

    addCounter() {
        var updatedCounter = this.state.counter
        updatedCounter++

        this.setState({
            counter: updatedCounter
        })
    }

    render() {
        var lis = [] //setting the array for the updated lis
        for (let i = 0; i < this.state.counter; i++) {  //this line is creating the loop that states every time you click the button, it adds one number. It takes the i and adds it onto the array.
            lis.push(<li className="list-group-item">{i}</li>)
        }

        return <div>
        <button type="button" className="btn btn-default btn-block" onClick={this.addCounter}>Click me</button>
        <ul className="list-group">
            {lis}
        </ul>
        </div>
    }

    render() {
        return <h1>It works!</h1>
    }
}

ReactDOM.render(<Button />, document.getElementById('react'))
