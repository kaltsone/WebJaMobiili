import React from 'react'

class TelephoneDirectory extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons: [
          { name: 'Arto Hellas',
            id: 1,
        }
      ],
        newName: ''
      }
    }
    

    addName = (event) => {
      event.preventDefault()
      const nameObject = {
          name: this.state.newName,
          id: this.state.persons.length + 1
      }

      console.log('nimimappi ' + this.state.persons.some(p => p.name === this.state.newName))
      if(!this.state.persons.some(p => p.name  === this.state.newName)) {
    
        const persons = this.state.persons.concat(nameObject)
    
        this.setState({
          persons: persons,
          newName: ''
        })
      } else {
        alert('same name already in array')
        this.setState({
          newName: ''
        })
      }
    }

    handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({ newName: event.target.value })
    }

    //käytä use state
  
    render() {
      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <form onSubmit={this.addName}>
            <div>
              nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
            </div>
            <div>
              <button type="submit">lisää</button>
            </div>
          </form>
          <h2>Numerot</h2>
          {this.state.persons.map(note => <div key = {note.id}>{note.name}</div>)}
        </div>
      )
    }
  }
  
  export default TelephoneDirectory