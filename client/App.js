import React, {Component} from 'react'


class App extends Component {
    constructor() {
        super()
        this.state = {
            lesson: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "."]
        }
    }

    render() {
        return(
            <div id='text-input'>
                {this.state.lesson.map( (char, idx) => <span className='text-item' key={idx}>{char}</span>)}
            </div>
        )
    }
}

export default App