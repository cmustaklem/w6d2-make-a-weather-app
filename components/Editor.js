import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Editor extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.updatePageText = this.updatePageText.bind(this)
        this.state = sharedState()
    }
    //this is listening to the sharedState. It is listening in for an event
    //
    componentDidMount() {
        attachSharedState(this)
    }

    componentWillMount() {
        detachSharedState(this)
    }

    updatePageText(e) {
        sharedState({
            pageText: e.target.value
        })
        window.pageText = e.target.value
    }

    render() {
            //this div should be on the same line as the return
        return <div class="container center-block">
        <h1>Editor's View</h1>
        <textarea className="form-control" onChange={this.updatePageText}>{this.state.pageText}</textarea>
        <p>{this.state.pageText}</p>
        </div>
    }
}

export default Editor
