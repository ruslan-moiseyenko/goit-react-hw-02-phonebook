import React, { Component } from 'react';
import Section from './feedback/Section';
import PhonebookAddingForm from './phonebookAddingForm/phonebookAddingForm';
import Contacts from './contacts/contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  submitHandler = data => {
    this.setState(prevState => (
      { contacts: [...prevState.contacts, data] }
    )
    );
  };
  render() {
    return (
      <>
        <Section title="Phonebook">
          <PhonebookAddingForm onSubmit={this.submitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}

export default App;
