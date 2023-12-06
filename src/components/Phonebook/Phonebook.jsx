import { PhonebookContainer, PhonebookTitle } from './Phonebook.css';

export const Phonebook = ({ children, title }) => {
  return (
    <PhonebookContainer>
      <PhonebookTitle>{title}</PhonebookTitle>
      {children}
    </PhonebookContainer>
  );
};
