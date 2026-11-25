import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const nameAlreadyInList = persons.find((person) => person.name === newName)
    if (nameAlreadyInList) {
      alert(`${newName} is already on the list`)
    } else {
      const nameObject = {
        name: newName,
        phone: newPhone,
      }

      setPersons(persons.concat(nameObject))
      setNewName("")
      setNewPhone("")
    }
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneInput = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameInput}/></div>
        <div>number: <input value={newPhone} onChange={handlePhoneInput}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} name={person.name} phone={person.phone}/>)}

      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App