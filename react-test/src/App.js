import React, { Component, useReducer } from 'react'
import Table from './Table'
import Form from './Form'

const myReducer = (state, actions) => {
    switch(actions.type) {
        case('add'):
        return {
            ...state,
            count: state.count + 1
        }
        default: 
        return state
    }
}

function Add() {
    const [state, dispatch] = useReducer(myReducer, { count: 0 })
  
    return (
      <div className="Add">
        <button onClick={() => dispatch({ type: 'add' })}>
         Add
        </button>
        <p>Count: {state.count}</p>
      </div>
    );
}
class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            }
        ]
    }
    render() {
        const characters = this.state
        return (
            <div className="container">
                <Table  characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handSubmit={this.handSubmit} />
                <Add></Add>
            </div>
        )
    }
    removeCharacter = index => {
        const { characters } =this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }
    handSubmit = character => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    }
}

export default App