import s from './Counter.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Title } from '../Title/Title';

export class Counter extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotal: 0,
    initialPercentage:0
  };
  state = {
    title: 'Statistics',
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    total:this.props.initialTotal,
    percentage:this.props.initialPercentage
  }

  feedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good+1,
    }));
  }
  feedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral+1,
    }));
  }
  feedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad+1,
    }));
  }
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      percentage: Math.ceil((prevState.good + prevState.neutral)/(prevState.total)* 100)
    }));
  }
   wrapperFeedback = () => {
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
   }

  render () {
    const {title, good, neutral, bad, total, percentage} = this.state;
    const { feedbackGood, feedbackNeutral, feedbackBad, wrapperFeedback} = this;

    return (
      <div className={s.counter}>
        <Button id="goodBtn" variant="outline-secondary"
        className={s.btn}
        onClick={()=>{feedbackGood(); wrapperFeedback()}}>
        Good
        </Button>
        <Button id="neutralBtn" variant="outline-secondary"
        className={s.btn}
        onClick={()=>{feedbackNeutral(); wrapperFeedback()}}>
        Neutral
        </Button>
        <Button id="badBtn" variant="outline-secondary"
        className={s.btn}
        onClick={()=>{feedbackBad(); wrapperFeedback()}}>
        Bad
        </Button>
        <Title value={title}/>
        <p className={s.text}>Good: {good}</p>
        <p className={s.text}>Neutral: {neutral}</p>
        <p className={s.text}>Bad: {bad}</p>
        <p className={s.text}>Total: {total}</p>
        <p className={s.text}>Positive feedback: {percentage}%</p>
      </div>
    );
  }
}
