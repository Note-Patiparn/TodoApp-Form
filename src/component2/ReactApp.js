import React, {Component} from 'react'

class FetchApp extends Component {
    constructor() {
        super()
        this.state = {
            swCharacter: {},
            pageLoading: false
        }
    }
    
    componentDidMount() {
        this.setState({
            pageLoading: true
        })
        fetch('https://swapi.dev/api/people/10')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    swCharacter: data,
                    pageLoading: false
                })
            })
    }

    render() {
        const pageStatus = this.state.pageLoading ? 'Loading ...' : this.state.swCharacter.name
        return(
            <h1> {pageStatus} </h1>
        )
    }
}   


export default FetchApp

// https://swapi.dev/api/people/1