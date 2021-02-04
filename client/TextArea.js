import React, { Component } from 'react'
import Char from './Char'
import axios from 'axios'


class TextArea extends Component {
    constructor() {
        super()
        this.state = {
            lesson: ["f", "o", "r", "(", "l", "e", "t", " ", "i", " ", "=", " ", "0", ";", " ", "i", " ", "<", " ", "a", "r", "r", "a", "y", ".", "l", "e", "n", "g", "t", "h", ";", " ", "i", "+", "+", ")", " ", "{", "Enter", "Tab", "c", "o", "n", "s", "o", "l", "e", ".", "l", "o", "g", "(", "\"", "H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!", "\"", ")", "Enter", "}"],
            lessonOriginal: ["f", "o", "r", "(", "l", "e", "t", " ", "i", " ", "=", " ", "0", ";", " ", "i", " ", "<", " ", "a", "r", "r", "a", "y", ".", "l", "e", "n", "g", "t", "h", ";", " ", "i", "+", "+", ")", " ", "{", "Enter", "Tab", "c", "o", "n", "s", "o", "l", "e", ".", "l", "o", "g", "(", "\"", "H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!", "\"", ")", "Enter", "}"],
            cursorIdx: 0,
            wrongCharsStartIdx: 0,
            numWrong: 0,
            complete: false,
            allowedKeys: new Set(["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", 
                                "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", 
                                "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
                                "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "{", "]", "}", ";", ":", "'", 
                                "\"", ",", "<", ".", ">", "/", "?", "|", "\\", "`", "~", "Enter", "Tab", " ", "Backspace"])
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    handleKeyDown(event) {
        event.preventDefault()
        const { lesson } = this.state,
                key = event.key
        let { cursorIdx } = this.state

        if(this.state.allowedKeys.has(key)) {
            if(key === lesson[cursorIdx]) {
                if(cursorIdx === lesson.length-1) this.setState({cursorIdx: ++cursorIdx, complete: true})
                else this.setState({cursorIdx: ++cursorIdx})
            } else if(key === "Backspace") {
                
            }else {
                this.handleError(cursorIdx, lesson, key)
            }   
        }
    }

    handleError(idx, lesson, key) {
        let { numWrong } = this.state
        const wrongStartIdx = numWrong === 0 ? idx+1 : this.state.wrongCharsStartIdx

        for(let i = idx+1; i < lesson.length; i++) {
            const temp = lesson[i]
            lesson[i] = key
            key = temp
        }
        this.setState({
            lesson,
            cursorIdx: ++idx,
            wrongCharsStartIdx: wrongStartIdx,
            numWrong: ++numWrong
        }, () => console.log(this.state))
        console.log(numWrong, wrongStartIdx, idx)
    }

    handleClick() {
        this.setState({
            lesson: this.state.lessonOriginal,
            cursorIdx: 0,
            wrongCharsStartIdx: 0,
            numWrong: 0,
            complete: false,
        })
    }

    statusUpdate(cursorIdx, idx) {
        const { numWrong, wrongCharsStartIdx } = this.state
        if(numWrong > 0) {
            if(idx >= wrongCharsStartIdx && idx <= cursorIdx) return 'mistake'
            else if(idx === cursorIdx) return 'mistake-blinking'
            else if(idx === wrongCharsStartIdx-1) return 'normal'
        }
        else if(idx === cursorIdx) return 'blinking'
        else if(idx < cursorIdx) return 'complete'
        else return 'normal'
    }

    render() {
        const { lesson, cursorIdx } = this.state
        return(
            <div className='text-container' onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex='-1'>
                {lesson.map( (char, idx) => <Char char={char} index={idx} status={this.statusUpdate(cursorIdx, idx)} key={idx} />)}
            </div>
        )
    }
}

export default TextArea