import { ButtonContainer, ButtonStyled } from './FeedbackOption.styled';

export default function FeedbackOption({ options, onLeaveFeedback }) {
  return (
    <ButtonContainer>
      {Object.keys(options).map(key => (
        <ButtonStyled key={key} onClick={onLeaveFeedback} name={key}>
          {key}
        </ButtonStyled>
      ))}
    </ButtonContainer>
  );
}
