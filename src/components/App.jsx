import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsTitle } from './ContactsTitle/ContactsTitle';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Phonebook title="Phonebook">
          <ContactsForm addContact={this.addContact} />
          <ContactsTitle title="Contacts" />
          <Contacts contacts={contacts} />
        </Phonebook>
      </>
    );
  }
}

export default App;
