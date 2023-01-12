import React, { Component } from 'react'
import updatedComp from './NumberView'
export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const count = this.state.count
        return (
            <div>
                <button onMouseEnter={this.incrementCount}>
                    {this.props.name}   Hover {count} Times
                </button>
            </div>
        )
    }
}

export default updatedComp(Counter)