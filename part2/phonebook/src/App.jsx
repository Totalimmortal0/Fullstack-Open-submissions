import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

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

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  // thank God for the MDN docs
  const personsToShow = filter ? persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Search: <input onChange={handleFilter}/></div>
      <h2>Add New</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameInput}/></div>
        <div>number: <input value={newPhone} onChange={handlePhoneInput}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {personsToShow.map(person => <Person key={person.id} name={person.name} phone={person.phone}/>)}

      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App