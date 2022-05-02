import React, { Component } from 'react';
import { FormPhoneBook, FormInput } from './FormPhoneBook.styled';
import PropTypes from 'prop-types';

class PhonebookAddingForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let currentState = this.state;
    this.props.onSubmit(currentState);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormPhoneBook onSubmit={this.handleSubmit}>
        <label>
          Name
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <br />
          <label>
            Phone
            <FormInput
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit" name="button Add">
            Add contact
          </button>
        </label>
      </FormPhoneBook>
    );
  }
}

export default PhonebookAddingForm;

PhonebookAddingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
