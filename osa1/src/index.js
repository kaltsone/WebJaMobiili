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
const Button = (props) => {
    return(
    <button onClick = {props.klikHandler}>{props.text}</button>       
    )
}
const Statistic = (props) => {
    return props.name === 'positives' ?
    <div>{props.name} {props.numbers} %</div> :
    <div>{props.name} {props.numbers}</div>
    
}
const Statistics = (props) => {
    return(
        <div>
        <Statistic name = 'good' numbers={props.statistics.good}/>
        <Statistic name = 'neutral' numbers={props.statistics.neutral}/>
        <Statistic name = 'bad' numbers={props.statistics.bad}/>
        <Statistic name = 'positives' numbers={(100*(props.statistics.good/props.statistics.klikAmount)).toFixed(1)}/>
        <Statistic name = 'average' numbers={(props.statistics.count/props.statistics.klikAmount).toFixed(2)} />
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
              <Button klikHandler={this.klikGood} text='good '/>
              <Button klikHandler={this.klikNeutral} text='neutral'/>
              <Button klikHandler={this.klikBad} text='bad'/>
              </div>
              <h1>
                  Feedbacks given
              </h1>
            <Statistics statistics = {this.state}/>
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