import React from 'react'


const Header = (props) => {
    return(
        <div>
            <h1>{props.text.name}</h1>
        </div>
    )
}
const Contents = (props) => {
    console.log('contents props are ' + Object.values(props))
    return (
        <>
          <Part parts={props} />
        </>
      )
}

const Part = (props) => {
    console.log('part props are ' + props)
    return (
        <li key={props.id}>
          {props.name} {props.exercises}
        </li>
      )
}
const Total = (props) => {
    //console.log('total props is ' + Object.values(props).map(p => p.exercises))
    return (
        <b>
            total: {Object.values(props).reduce((acum, props) => props + acum, 0)}
        </b>
      )
    }

const Course = (props) => {
    console.log('course props are ' + props.course.parts)
    props.course.parts.map(p => console.log(p))
  return ( 
    <div>
        <Header text={props.course}/>
        {props.course.parts.map(p => <Contents content={p}/>)}
        <Total parts={props.course.parts.exercises} />
    </div>
  )
}
/*
const Course = (props) => {
  return props.map()
}
*/
export default Course