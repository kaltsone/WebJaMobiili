import React from 'react'

class TelephoneDirectory extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons: [
          { name: 'Arto Hellas',
            number: '040 199 6969',
            id: 1,
        }
      ],
        newName: '',
        newNumber: ''
      }
    }
    

    addName = (event) => {
      event.preventDefault()
      const nameObject = {
          name: this.state.newName,
          number: this.state.newNumber,
          id: this.state.persons.length + 1
      }

      console.log('nimimappi ' + this.state.persons.some(p => p.name === this.state.newName))
      if(this.state.persons.some(p => p.name  === this.state.newName) ||
      this.state.persons.some(p => p.number === this.state.newNumber)) {

        alert('same name, or number already in array')
        this.setState({
          newName: '',
          newNumber: ''
        })} else if(this.state.newNumber === '' ||
          this.state.newName === '') {
            alert('please enter both name and number')
       
      } else {
        const persons = this.state.persons.concat(nameObject)
    
        this.setState({
          persons: persons,
          newName: '',
          newNumber: ''
        })
      }
    }

    handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
      this.setState({ newNumber: event.target.value })
    }

    render() {
      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <form onSubmit={this.addName}>
            <div>
              nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
            </div>
            <div>
              numero: <input value={this.state.newNumber} onChange={this.handleNumberChange}/>
            </div>
            <div>
              <button type="submit">lisää</button>
            </div>
          </form>
          <h2>Numerot</h2>
          <table> <tbody>
              <Table table={this.state.persons.map(person => <tr key={person.id}><td>{person.name}</td><td>{person.number}</td></tr>)}/>
          </tbody> </table>
        </div>
      )
    }
  }

  const Table = (props) => {
    return(
        props.table
    )
  }
  
  export default TelephoneDirectory