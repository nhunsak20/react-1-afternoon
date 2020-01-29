import React, { Component } from 'react'

class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(val) {
        this.setState({
            number1: parseInt(val, 10)
        })
    }

    handleChange2(val) {
        this.setState({
            number2: parseInt(val, 10)
        })
    }

    handleClick(val_1, val_2) {
        this.setState({
            sum: val_1 + val_2
        })
    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input type='text' className='inputLine' onChange={val => this.handleChange1(val.target.value)}/>
                <input type='text' className='inputLine' onChange={val => this.handleChange2(val.target.value)}/>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.number1, this.state.number2)}>Sum</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum