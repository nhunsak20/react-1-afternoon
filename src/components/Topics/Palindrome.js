import React, { Component } from 'react'

class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    isPalindrome(val) {
        let strArr = val.split('')
        let half = Math.ceil(strArr.length / 2)
        let isPal = false
        for(let i = 0; i < half; i++) {
            // console.log(`${strArr[i]} == ${strArr[strArr.length - 1 - i]}`)
            isPal = strArr[i] === strArr[strArr.length - 1 - i] ? true : false
        }
        return isPal
    }

    handleClick(val) {
        this.setState({
            palindrome: this.isPalindrome(val) ? 'true' : 'false'
        })
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input type='text' className='inputLine' onChange={val => this.handleChange(val.target.value)}/>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}>Palindrome</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome