import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

class PhonebookAddingForm extends Component {
  state = { name: '' };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <button
            type="submit"
            name="button Add"
            onClick={e => console.log(e.currentTarget.name)}
          >
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

export default PhonebookAddingForm;
