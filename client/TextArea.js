import React, { Component } from 'react'


class TextArea extends Component {
    constructor() {
        super()
        this.state = {
            lesson: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "."],
            cursorIdx: 0
        }
    }

    render() {
        let { lesson, cursorIdx } = this.state
        return(
            <div className='text-container'>
                {lesson.map( (char, idx) => <span className={cursorIdx === idx ? 'text-item-blink' : 'text-item'} key={idx}>{char}</span>)}
            </div>
        )
    }
}

export default TextArea