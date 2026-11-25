const NewPersonForm = ({ onSubmit, nameValue, nameHandler, phoneValue, phoneHandler}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>name: <input value={nameValue} onChange={nameHandler}/></div>
            <div>number: <input value={phoneValue} onChange={phoneHandler}/></div>
            <div>
            <button type="submit">add</button>
            </div>
      </form>
    )
}

export default NewPersonForm