import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactsList/ContactsList';
import { ContactsTitle } from './ContactsTitle/ContactsTitle';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Phonebook title="Phonebook">
          <ContactsForm></ContactsForm>
          <ContactsTitle title="Contacts"></ContactsTitle>
          <ContactList></ContactList>
        </Phonebook>
      </>
    );
  }
}

export default App;
