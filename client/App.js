import React, {Component} from 'react'
import TextArea from './TextArea'


class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <div className='app-container'>
                <TextArea />
            </div>
        )
    }
}

export default App