import {
  StatisticsContainer,
  StatisticsGood,
  StatisticsNeutral,
  StatisticsBad,
  Total,
  Percent,
} from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, goodPercent }) {
  return (
    <div>
      <StatisticsContainer>
        <StatisticsGood> Good: {good}</StatisticsGood>
        <StatisticsNeutral> Neutral: {neutral}</StatisticsNeutral>
        <StatisticsBad> Bad: {bad}</StatisticsBad>
      </StatisticsContainer>
      <Total> Total: {total}</Total>
      <Percent> Positive feedback: {goodPercent}% </Percent>
    </div>
  );
}
