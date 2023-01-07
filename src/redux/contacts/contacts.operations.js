import {
  fetchContactsRequest,
  fetchContactsError,
  fetchContactsSuccess,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactSuccess,
  removeContactRequest,
  removeContactError,
} from './contacts.actions';
import contactsAPI from 'services/contactsAPI';

export const getContacts = () => async dispatch => {
  try {
    dispatch(fetchContactsRequest());

    const { data } = await contactsAPI.getContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  try {
    dispatch(addContactRequest());

    const { data } = await contactsAPI.addContact(contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const removeContact = contactId => async dispatch => {
  try {
    dispatch(removeContactRequest());

    const { data } = await contactsAPI.removeContact(contactId);
    dispatch(removeContactSuccess(data));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};
