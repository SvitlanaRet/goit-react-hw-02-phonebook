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

    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            required
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
          ></Input>
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            required
            placeholder="Enter phone number"
            value={this.state.number}
            onChange={this.handleChange}
          ></Input>
        </Label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    );
  }
}
