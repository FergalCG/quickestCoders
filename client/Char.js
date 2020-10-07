import React, { Component } from 'react'


class Char extends Component {
    constructor(props) {
        super(props)
        this.state = {
            char: props.char,
            status: props.status || 'normal'
        }
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.status !== this.state.status) {
            this.setState({status: nextProps.status})
            return true
        }
        return false
    }

    render() {
        let { char, status } = this.state
        return (
            <span className={status}>{char}</span>
        )
    }

}

export default Char