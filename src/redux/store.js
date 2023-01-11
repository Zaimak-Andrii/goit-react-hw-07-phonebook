import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'redux/contacts/contacts.slices';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
