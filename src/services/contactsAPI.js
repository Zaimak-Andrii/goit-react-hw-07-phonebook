import axios from 'axios';

axios.defaults.baseURL = 'https://63b941806f4d5660c6e8b181.mockapi.io/api/v1';

const contactsAPI = {
  getContacts: () => axios.get('contacts'),
  addContact: contact => axios.post('contacts', contact),
  removeContact: contactId => axios.delete(`contacts/${contactId}`),
};

export default contactsAPI;
