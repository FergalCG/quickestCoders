import React, { Component } from 'react'
import Char from './Char'


class TextArea extends Component {
    constructor() {
        super()
        this.state = {
            lesson: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "."],
            cursorIdx: 0,
            complete: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(event) {
        event.preventDefault()
        const lesson = this.state.lesson
        let cursorIdx = this.state.cursorIdx
        if(event.charCode === lesson[cursorIdx].charCodeAt(0)) {
            if(cursorIdx === lesson.length.Char) this.setState({complete: true})
            else this.setState({cursorIdx: ++cursorIdx})
        } 
        
        console.log(cursorIdx)
    }

    handleClick(event) {
        this.setState({cursorIdx: 0})
    }

    statusUpdate(cursorIdx, idx) {
        if(idx === cursorIdx) return 'blinking'
        else if(idx < cursorIdx) return 'complete'
        else return 'normal'
    }

    render() {
        let { lesson, cursorIdx } = this.state
        return(
            <div className='text-container' onClick={this.handleClick} onKeyPress={this.handleKeyPress} tabIndex='-1'>
                {lesson.map( (char, idx) => <Char char={char} cursor={cursorIdx} status={this.statusUpdate(cursorIdx, idx)} key={idx} />)}
            </div>
        )
    }
}

export default TextArea