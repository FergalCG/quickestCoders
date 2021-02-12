import React, { Component } from 'react'


class Char extends Component {
    constructor(props) {
        super(props)
        this.state = {
            char: props.char,
            status: props.status
        }

        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.status !== this.state.status || nextProps.char !== this.state.char) {
            this.setState({
                status: nextProps.status,
                char: nextProps.char
            })
            return true
        }
        return false
    }

    render() {
        let { char, status } = this.state

        if(char === 'Tab') char = '    '
        else if(char === 'Enter') char = <br/>

        return (
            <span className={status}>{char}</span>
        )
    }

}

export default Char