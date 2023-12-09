import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.css';

export const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name + ': ' + contact.number}
          {
            <ButtonDelete
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </ButtonDelete>
          }
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
