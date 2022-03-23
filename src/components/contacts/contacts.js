import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name }) =>
        <li key={nanoid()}>{name}</li>
      )}
    </ul>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
}
