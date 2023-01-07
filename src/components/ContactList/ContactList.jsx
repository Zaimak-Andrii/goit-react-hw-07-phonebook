import { SubHeader } from 'components/Typography';
import { useEffect } from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { StyledContactList, StyledContactListButton, StyledContactListItem } from './ContactList.styled';

const getFilteredContacts = (contacts, filterStr) =>
  filterStr.length === 0 ? contacts : contacts.filter(({ name }) => name.toLowerCase().includes(filterStr));

export default function ContactList() {
  const { list } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filtredContacts = getFilteredContacts(list, filter);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  if (list.length === 0) {
    return <SubHeader mt={3}>The contact list is empty</SubHeader>;
  }

  return (
    <StyledContactList mt={3}>
      {filtredContacts.map(({ id, name, number }) => (
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
