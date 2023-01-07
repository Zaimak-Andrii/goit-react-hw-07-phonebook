import { createReducer } from '@reduxjs/toolkit';
import { updateFilter } from './filter.actions';

const value = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});

export default value;
