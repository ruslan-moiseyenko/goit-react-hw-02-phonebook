import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './feedback/Section';
import PhonebookAddingForm from './phonebookAddingForm/phonebookAddingForm';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  // addContacts = event => {
  //   this.setState({ contacts: event.target.value });
  // };

  submitHandler = data => {
    console.log(data);
    this.setState(prevState => {
      return (
        { contacts: [...prevState.contacts, data] }
      );
    }
    );
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <PhonebookAddingForm onSubmit={this.submitHandler} />
        </Section>
      </>
    );
  }
}

export default App;
