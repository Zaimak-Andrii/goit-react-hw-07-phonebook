import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
  addContactSuccess,
  addContactRequest,
  addContactError,
  removeContactSuccess,
  removeContactRequest,
  removeContactError,
} from './contacts.actions';

const list = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...payload, ...state],
  [removeContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload.id),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsRequest]: () => null,
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactRequest]: () => null,
  [addContactError]: (_, { payload }) => payload,
  [removeContactRequest]: () => null,
  [removeContactError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  list,
  isLoading,
  error,
});

export default contactsReducer;
