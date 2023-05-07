import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const nameId = nanoid();
    const newName = {
      id: nameId,
      name: this.state.name,
      number: this.state.number,
    };

    const existingContact = this.props.contacts.find(contact => contact.name === newName.name);
    if (existingContact) {
      alert(`${newName.name} is already in contacts!`);
      return;
    }

    this.props.onSubmit(newName);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { button } = this.props;
    const contactInputId = nanoid();
    return (
      <div className='form__container'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={contactInputId}>
            Name
            <input
              id={contactInputId}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={contactInputId}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">{button}</button>
        </form>
      </div>
    );
  }
}
