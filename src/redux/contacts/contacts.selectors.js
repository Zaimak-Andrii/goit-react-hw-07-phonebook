import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filter.selectors';

export const selectContacts = state => state.contacts.list;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (list, filter) =>
    filter.length === 0 ? list : list.filter(({ name }) => name.toLowerCase().includes(filter))
);
