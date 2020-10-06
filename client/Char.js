import React, { Component } from 'react'


class Char extends Component {
    constructor(props) {
        super(props)
        this.state = {
            char: props.char,
            status: props.status || 'normal'
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.status !== this.state.status
    }

    render() {
        let { char, status } = this.state
        return (
            <span className={status}>{char}</span>
        )
    }

}

export default Char