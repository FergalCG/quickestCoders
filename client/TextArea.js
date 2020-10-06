import React, { Component } from 'react'


class TextArea extends Component {
    constructor() {
        super()
        this.state = {
            lesson: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "."],
            status = ['blinker'],
            cursorIdx: 0
        }
    }

    keyPress(event) {
        console.log(event)
    }

    render() {
        let { lesson, cursorIdx, status } = this.state
        return(
            <div className={cursorIdx === idx ? 'text-container-blink' : 'text-container'} onClick={() => this.setState({cursorIdx: 0})} onKeyDownCapture={() => this.keyPress}>
                {lesson.map( (char, idx) => <span className={cursorIdx === idx ? 'text-item-blink': 'text-item'} key={idx}>{char}</span>)}
            </div>
        )
    }
}

export default TextArea