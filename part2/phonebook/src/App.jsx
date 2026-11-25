import { useId, useState } from 'react'
import Person from './components/Person'
import NewPersonForm from './components/NewPersonForm'
import Search from './components/Search'

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
        id: persons[persons.length - 1].id + 1
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
      <Search handler={handleFilter}/>
      <h3>Add New</h3>
      <NewPersonForm 
        onSubmit={addPerson}
        nameValue={newName}
        nameHandler={handleNameInput}
        phoneValue={newPhone}
        phoneHandler={handlePhoneInput}
        />

      <h3>Numbers</h3>
      {personsToShow.map(person => <Person key={person.id} name={person.name} phone={person.phone}/>)}

      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App