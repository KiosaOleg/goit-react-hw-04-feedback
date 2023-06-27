import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOption from 'components/FeedbackOption/FeedbackOption';
import Section from 'components/Section/Section';
import { FeedbackContainer } from './Feedback.styled';
import StatisticsTitle from 'components/StatisticsTitle/StatisticsTitle';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = event =>
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  goodPercent = () => {
    return parseInt((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    return (
      <FeedbackContainer>
        <Section title="Please leave feedback 🥺">
          <FeedbackOption
            options={this.state}
            onLeaveFeedback={this.onClickBtn}
          />
        </Section>

        <section>
          <StatisticsTitle title="Statistics 📖" />

          {this.totalFeedback() ? (
            <div>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.totalFeedback()}
                goodPercent={this.goodPercent()}
              />
            </div>
          ) : (
            <Notification message="There is no feedback 😔" />
          )}
        </section>
      </FeedbackContainer>
    );
  }
}
