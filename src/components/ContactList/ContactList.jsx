import { SubHeader } from 'components/Typography';
import { useEffect } from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { filterSelectors } from 'redux/filter';
import {
  StyledContactList,
  StyledContactListButton,
  StyledContactListItem,
} from './ContactList.styled';

export default function ContactList() {
  const list = useSelector(contactsSelectors.selectFilteredContacts);
  const filter = useSelector(filterSelectors.selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  if (list.length === 0 && filter.length === 0) {
    return <SubHeader mt={3}>The contact list is empty</SubHeader>;
  }

  return (
    <StyledContactList mt={3}>
      {list.map(({ id, name, number }) => (
        <StyledContactListItem key={id}>
          {name}: {number}
          <StyledContactListButton
            type="button"
            onClick={() => {
              dispatch(contactsOperations.removeContact(id));
            }}
            aria-label="delete contact button"
          >
            <RiDeleteBack2Line fill="red" />
          </StyledContactListButton>
        </StyledContactListItem>
      ))}
    </StyledContactList>
  );
}
