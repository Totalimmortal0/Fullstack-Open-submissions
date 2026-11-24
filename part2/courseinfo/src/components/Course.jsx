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
    <p><b>Total of {parts.reduce((acc, cur) => acc + cur.exercises, 0)} exercises</b></p>
  )
}

const Course = ({ courses }) => {
  return (
    <>
      {courses.map(course => {
        // console.log(course)
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
          </div>
        )
      })}
    </>
  )
}

export default Course