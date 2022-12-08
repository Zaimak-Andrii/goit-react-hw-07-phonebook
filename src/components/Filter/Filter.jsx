import { FilterPropTypes } from './Filter.type';

export default function Filter({ filter, onChange }) {
  return (
    <label>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={evt => {
          onChange(evt.target.value);
        }}
        placeholder="Search..."
      />
    </label>
  );
}

Filter.propTypes = FilterPropTypes;
