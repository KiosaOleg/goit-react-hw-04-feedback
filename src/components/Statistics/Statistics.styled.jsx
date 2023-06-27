import styled from "@emotion/styled";

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StatisticsGood = styled.span`
  padding: 2px 4px;
  margin: 5px;
  border: 1px solid green;
  border-radius: 5px;
  background-color: #67f86768;
  font-weight: 400;
  font-size: 15px;
`;

export const StatisticsNeutral = styled.span`
  padding: 2px 4px;
  margin: 5px;
  border: 1px solid orange;
  border-radius: 5px;
  background-color: #ffd9007a;
  font-weight: 400;
  font-size: 15px;
`;
export const StatisticsBad = styled.span`
  padding: 2px 4px;
  margin: 5px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: #ff000049;
  font-weight: 400;
  font-size: 15px;
`;

export const Total = styled.span`
  padding: 5px;
  background-color: #e6e5e5ec;
  border-radius: 5px;
  box-shadow: 0px 5px 22px -9px;
  margin-right: 10px;
`;

export const Percent = styled.span`
  padding: 5px;
  background-color: #e6e5e5ec;
  border-radius: 5px;
  box-shadow: 0px 5px 22px -9px;
`;
