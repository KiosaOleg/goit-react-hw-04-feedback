import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const ButtonStyled = styled.button`
  margin: 0 10px;
  padding: 3px 6px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 5px;
  border: 1px solid green;
  background-color: #fdc200c8;
  transition: all 300ms;

  &:hover {
    scale: 1.05;
  }

  &:first-of-type {
    color: #000000;
    background-color: #6afe00c9;
  }

  &:last-child {
    color: #000000;
    background-color: #ff0000a3;
  }
`;
