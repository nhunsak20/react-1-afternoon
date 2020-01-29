import React, { Component } from 'react'

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['Nick', 'Chase', 'Rachel', 'Nelly', 'Nico', 'Kylie'],
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
        let temp = []

        for(let i = 0; i < arr.length; i++) {
            if(arr[i].includes(val)) {
                temp.push(arr[i])
            }
        }

        this.setState({
            filteredArray: temp
        })

    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input type='text' className='inputLine' onChange={val => this.handleChange(val.target.value)}/>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringPB'>Fliter: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString