import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'
// import TelephoneDirectory from './components/TelephoneDirectory'


 const App = () => {
    const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8,
        id: 1
      },
      {
        name: 'Using props',
        exercises: 10,
        id: 2
      },
      {
        name: 'Component states',
        exercises: 12,
        id: 3
      },
      {
        name: 'Test name',
        exercises: 40,
        id: 4
      },
      {
        name: 'Another test',
        exercises: 2,
        id: 5
      }
    ]
  }


  return (
    <div>
        <Course course={course} />
    </div>
  )
}


ReactDOM.render(
    <div>
        <App />
    </div>,
  document.getElementById('root')
//  <TelephoneDirectory />
)