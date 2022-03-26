import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeliteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) =>
        <li key={id}>{name} : {number}
          <button onClick={() => onDeliteContact(id)}> Delite</button>
        </li>
      )
      }
    </ul >
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
}
