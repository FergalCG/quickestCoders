import React, {Component} from 'react'
import TextArea from './TextArea'


class App extends Component {
    constructor() {
        super()
        this.state = {
            lesson: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "."]
        }
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