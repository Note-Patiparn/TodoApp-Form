import React , {Component} from 'react'

class Formprac extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            textArea: '',
            isFriendly: false,
            gender: '',
            favColor: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({ [name]: checked} ) : this.setState({ [name]: value} )
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                    type='text' 
                    name='firstName'
                    value={this.state.firstName}
                    placeholder='Input Type Text' 
                    onChange={this.handleChange} 
                    />

                    <br />

                    <textarea value='this is textarea' onChange={this.handleChange} />

                    {/* checkbox */}
                    <br />
                    <label> 
                        <input 
                        type='checkbox'
                        name='isFriendly'
                        checked= {this.state.isFriendly}
                        onChange = {this.handleChange}
                        />
                        Checkbox label
                    </label>

                    <br/>
                    <label>
                    <input 
                        type='radio'
                        name='gender'
                        value="Male"
                        checked= {this.state.gender === 'Male'}
                        onChange = {this.handleChange}
                    /> Male
                    </label>

                    <br/>
                    <label>
                    <input 
                        type='radio'
                        name='gender'
                        value='Female'
                        checked= {this.state.gender === 'Female'}
                        onChange = {this.handleChange}
                    /> Female
                    </label>

                    <br/>
                    <label>
                    <input 
                        type='radio'
                        name='gender'
                        value='LGBTQ'
                        checked= {this.state.gender === 'LGBTQ'}
                        onChange = {this.handleChange}
                    /> LGBTQ
                    </label>

                    <br/>
                    <label>Favorite Color: </label>
                    <select value={this.state.favColor} name='favColor' onChange={this.handleChange}>
                        <option value=''> ----- </option>
                        <option value='Red'>Red</option>
                        <option value='Green'>Green</option>
                        <option value='Blue'>Blue</option>
                        <option value='Black'>Black</option>
                        <option value='White'>White</option>
                    </select>

                </form>
 
                <h1> {this.state.firstName} </h1> <br />
                <h2> You are a {this.state.gender}</h2>
                <h3>My Favorite Color is {this.state.favColor}</h3>

            </div>
        )
    }
}

export default Formprac