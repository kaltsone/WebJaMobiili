import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Contents = (props) => {
    return(
        <div>
            <Part parts={props.parts[0]}/>
            <Part parts={props.parts[1]} />
            <Part parts={props.parts[2]} />
        </div>
    )
}
const Total = (props) => {
    return(
        <div>
            <p>Total {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises</p>
        </div>
    )
}
const Part = (props) => {
    return(
        <div>
            <p>{props.parts.name} {props.parts.exercises}</p>
        </div>
    )
}

 const App = () => {
    const course = {
        name: 'Superadvanced web and mobile programming',
        parts: [
          {
            name: 'Basics of React',
            exercises: 8
          },
          {
            name: 'Using props',
            exercises: 10
          },
          {
            name: 'Component states',
            exercises: 12
          }
        ]
      }


  return (
    <div>
        <Header course={course.name} />
        <Contents parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

class App2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          good: 0,
          neutral: 0,
          bad: 0,
          count: 0,
          klikAmount: 0
        }
      }
    
      klikGood = () => {
        this.setState({
          good: this.state.good + 1,
          count: this.state.count + 1,
          klikAmount: this.state.klikAmount + 1
        })
      }
    
      klikNeutral = () => {
        this.setState({
          neutral: this.state.neutral + 1,
          klikAmount: this.state.klikAmount + 1

        })
      }

      klikBad = () => {
        this.setState({
          bad: this.state.bad + 1,
          count: this.state.count - 1,
          klikAmount: this.state.klikAmount + 1
        })
      }
    
      render() {
        return (
          <div>
              <h1>Send Feedback</h1>
              <div>
              <button onClick={this.klikGood}>good</button>
              <button onClick={this.klikNeutral}>neutral</button>
              <button onClick={this.klikBad}>bad</button>
              </div>
              <h1>
                  Feedbacks given
              </h1>
            <div>Good: {this.state.good}</div>
            <div>Neutral: {this.state.neutral} </div>
            <div>Bad: {this.state.bad} </div>
            <div>Average: {(this.state.count/this.state.klikAmount).toFixed(2)} (Initially NaN, since one can't devide by zero. Positive count means more good feedback, and negative more bad.) </div>
            <div>Positive: {(100*(this.state.good/this.state.klikAmount)).toFixed(1)} % </div>
          </div>
        )
      }
    }

ReactDOM.render(
    <div>
        <App />
        <App2 />
    </div>,
  document.getElementById('root')
)