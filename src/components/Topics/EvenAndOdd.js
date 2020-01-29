import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({
            userInput: value
        })
    }

    handleClick(userInput) {
        let arr = userInput.split(',')
        let even = []
        let odd = []

        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i])
            if(arr[i] % 2 === 0) {
                even.push(parseInt(arr[i], 10))
                console.log(even)
            }
            else {
                odd.push(parseInt(arr[i], 10))
            }
        }

        this.setState({
            evenArray: even,
            oddArray: odd
        })
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input type='text' className='inputLine' onChange={val => this.handleChange(val.target.value)}/>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}>Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd