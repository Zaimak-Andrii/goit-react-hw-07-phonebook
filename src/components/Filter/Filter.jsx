import { StyledForm } from 'components/ContactForm/ContactForm.styled';
import { StyledFormInput, StyledFormLabel } from 'components/FormInput/FormInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from 'redux/filter';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <StyledForm>
      <StyledFormLabel>
        Find contact by name
        <StyledFormInput
          type="text"
          name="filter"
          value={filter}
          onChange={evt => {
            dispatch(filterActions.updateFilter(evt.target.value));
          }}
          placeholder="Search..."
        />
      </StyledFormLabel>
    </StyledForm>
  );
}
