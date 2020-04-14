import React, { Component } from 'react'

class Form extends Component {
    initState = {
        name: '',
        job: ''
    }
    state = this.initState

    HandChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }
    
    render() {
        const { name, job } = this.state
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.HandChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.HandChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
    submitForm = () => {
        this.props.handSubmit(this.state)
        this.setState(this.initState)
    }
}

export default Form