import { ContactsList, ContactsItem } from './Contacts.css';

export const Contacts = ({ contacts }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactsItem key={contact.id}>{contact.name}</ContactsItem>
      ))}
    </ContactsList>
  );
};
