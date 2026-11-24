const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => {
  // console.log(parts)
  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </div>
  )
}

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({ parts }) => {
  // console.log(parts)
  return (
    <p>Number of exercises {parts.reduce((acc, cur) => acc + cur.exercises, 0)}</p>
  )
}

const Course = ({ course }) => {
  // console.log(course.name)
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
    
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      // {
      //   name: 'test course one',
      //   exercises: 3,
      //   id: 4
      // },
      // {
      //   name: 'test course two',
      //   exercises: 8,
      //   id: 5
      // }
    ]
  }

  return <Course course={course} />
}

export default App