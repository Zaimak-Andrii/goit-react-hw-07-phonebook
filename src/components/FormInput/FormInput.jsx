import {
  StyledErrorMessage,
  StyledFormInput,
  StyledFormLabel,
} from './FormInput.styled';

export default function FormInput({ children, touched, error, ...props }) {
  return (
    <StyledFormLabel>
      {children}
      <StyledFormInput {...props} isValid={!error} touched={touched} />

      {touched && error ? (
        <StyledErrorMessage>{error}</StyledErrorMessage>
      ) : null}
    </StyledFormLabel>
  );
}
