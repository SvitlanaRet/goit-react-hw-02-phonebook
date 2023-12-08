import { Component } from 'react';
import { Form, Label, Input, ButtonForm } from './ContactsForm.css';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addContact } = this.props;

    addContact({ ...this.state });

    this.setState({ name: '' });
  };
  render() {
    const { name } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            required
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          ></Input>
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="name"
            required
            placeholder="Enter phone number"
            value={name}
            onChange={this.handleChange}
          ></Input>
        </Label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    );
  }
}
