import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => {
  return (
    <div>
      <label>
        Filter by name:
        <input type="text" onChange={onChange} value={value} />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
