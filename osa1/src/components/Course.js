import React from 'react'


const Header = (props) => {
    return(
        <div>
            <h1>{props.text.name}</h1>
        </div>
    )
}
const Contents = (props) => {
    return (
        <Part parts={props} />
        )
    }
    
    const Part = (props) => {
    return (
        <li key={props.parts.content.id}>
          {props.parts.content.name} {props.parts.content.exercises}
        </li>
      )
}
const Total = (props) => {
    const total = 0
    props.total.parts.map(p => total + p.exercises)
    return (
        <b>
            total: {props.total.parts.reduce((acc, total) => acc + total.exercises, 0)}
        </b>
      )
    }

const Course = (props) => {
  return ( 
    <div>
        <Header text={props.course}/>
        {props.course.parts.map(p => <Contents content={p}/>)}
        <Total total={props.course} />
    </div>
  )
}

export default Course