import React, { Component } from 'react';
import Section from './feedback/Section';
import PhonebookAddingForm from './phonebookAddingForm/phonebookAddingForm';
import Contacts from './contacts/contacts';
import Filter from './filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  submitHandler = data => {
    this.setState(prevState => (
      { contacts: [...prevState.contacts, data] }
    )
    );
  };
  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  }
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredNames = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
      <>
        <Section title="Phonebook">
          <PhonebookAddingForm onSubmit={this.submitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.handleFilter} />
          <Contacts contacts={filteredNames} />
        </Section>
      </>
    );
  }
}

export default App;
