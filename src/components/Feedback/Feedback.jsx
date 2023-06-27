import React, { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOption from 'components/FeedbackOption/FeedbackOption';
import Section from 'components/Section/Section';
import { FeedbackContainer } from './Feedback.styled';
import StatisticsTitle from 'components/StatisticsTitle/StatisticsTitle';

export default function Feedback() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClickBtn = event => {
    const { name } = event.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const goodPercent = () => {
    return parseInt((feedback.good / totalFeedback()) * 100);
  };

  return (
    <FeedbackContainer>
      <Section title="Please leave feedback 🥺">
        <FeedbackOption options={feedback} onLeaveFeedback={onClickBtn} />
      </Section>

      <section>
        <StatisticsTitle title="Statistics 📖" />

        {totalFeedback() ? (
          <div>
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback()}
              goodPercent={goodPercent()}
            />
          </div>
        ) : (
          <Notification message="There is no feedback 😔" />
        )}
      </section>
    </FeedbackContainer>
  );
}
