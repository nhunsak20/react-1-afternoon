import React, { Component } from 'react'

class FilterObject extends Component {

    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: 'Nick',
                    job: 'Software Engineering',
                    isDumb: true
                },
                {
                    name: 'Chase',
                    hobbies: ['golf', 'basketball']
                },
                {
                    name: 'Rachel',
                    role: 'Mother',
                    color: 'blue'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    handleClick(val) {
        let arr = this.state.unFilteredArray
        var temp = []

        for(let i = 0; i < arr.length; i++) {
            if(arr[i].hasOwnProperty(val)) {
                temp.push(arr[i])
            }
        }

        this.setState({
            filteredArray: temp
        })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input type='text' className='inputLine' onChange={val => this.handleChange(val.target.value)}/>
                <button className='confirmationButton'onClick={() => this.handleClick(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectPB'>Filters: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject