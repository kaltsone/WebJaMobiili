import React from 'react'

const Button = (props) => {
    return(
    <button onClick = {props.klikHandler}>{props.text}</button>       
    )
}
const Statistic = (props) => {
    return props.name === 'positives' ?
    <tr><td>{props.name}</td><td>{props.numbers} %</td></tr>:
    <tr><td>{props.name}</td><td>{props.numbers}</td></tr>
}
const Statistics = (props) => {
    if (props.statistics.klikAmount === 0) {
        return(
            <div>
                Thus so far thou art not giveth feedback
            </div>
        )
    }
    return(
        <table>
            <tbody>
            <Statistic name = 'good' numbers={props.statistics.good}/>
            <Statistic name = 'neutral' numbers={props.statistics.neutral}/>
            <Statistic name = 'bad' numbers={props.statistics.bad}/>
            <Statistic name = 'positives' numbers={(100*(props.statistics.good/props.statistics.klikAmount)).toFixed(1)}/>
            <Statistic name = 'average' numbers={(props.statistics.count/props.statistics.klikAmount).toFixed(2)} />
            </tbody>
        </table>
    )
}

class Feedback extends React.Component {
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
                <h1>Feedbacks given</h1>
                <Statistics statistics = {this.state}/>
            </div>
        )
      }
    }

export default Feedback