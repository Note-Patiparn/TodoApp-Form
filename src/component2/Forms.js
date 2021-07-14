import React , {Component} from 'react'

class FormApp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return(
            <div>
                <form>
                    <input type='text' 
                    name='firstName' 
                    value={this.state.firstName} 
                    placeholder='First Name' 
                    onChange={this.handleChange} 
                    />

                    <input type='text' name='lastName' value={this.state.lastName} placeholder='First Name' onChange={this.handleChange} />
                </form>

                <h1> {this.state.firstName} {this.state.lastName} </h1>
            </div>
        )
    }
}


export default FormApp