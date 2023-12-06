import { Component } from 'react';
import { Form, Label, Input, ButtonForm } from './ContactsForm.css';

export class ContactsForm extends Component {
  state = {
    name: '',
  };

  render() {
    // const { name } = this.state;

    return (
      <Form>
        <Label>
          Name
          <Input type="text" name="name" required></Input>
        </Label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    );
  }
}
