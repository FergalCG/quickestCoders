import React, { Component } from 'react'
import Char from './Char'
import axios from 'axios'


class TextArea extends Component {
    constructor() {
        super()
        this.state = {
            lesson: ["f", "o", "r", "(", "l", "e", "t", " ", "i", " ", "=", " ", "0", ";", " ", "i", " ", "<", " ", "a", "r", "r", "a", "y", ".", "l", "e", "n", "g", "t", "h", ";", " ", "i", "+", "+", ")", " ", "{", "Enter", "Tab", "c", "o", "n", "s", "o", "l", "e", ".", "l", "o", "g", "(", "\"", "H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!", "\"", ")", "Enter", "}"],
            cursorIdx: 0,
            numWrong: 0,
            wrongCharsStartIdx: 0,
            complete: false,
            allowedKeys: new Set(["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", 
                                "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", 
                                "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
                                "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "{", "]", "}", ";", ":", "'", 
                                "\"", ",", "<", ".", ">", "/", "?", "|", "\\", "`", "~", "Enter", "Tab", " ", "Backspace"])
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    handleKeyDown(event) {
        event.preventDefault()
        const lesson = this.state.lesson
        let cursorIdx = this.state.cursorIdx
        console.log(lesson[cursorIdx])
        if(this.state.allowedKeys.has(event.key)) {
            if(event.key === lesson[cursorIdx]) {
                if(cursorIdx === lesson.length-1) this.setState({cursorIdx: ++cursorIdx, complete: true})
                else this.setState({cursorIdx: ++cursorIdx})
            } else if(event.key === "Backspace") {
                
            }else {
                
            }
        }
    }

    handleError() {
        
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
            <div className='text-container' onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex='-1'>
                {lesson.map( (char, idx) => <Char char={char} cursor={cursorIdx} status={this.statusUpdate(cursorIdx, idx)} key={idx} />)}
            </div>
        )
    }
}

export default TextArea