import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as contactAction from './act/contactAction';


class App extends Component {

  constructor(props){
    super(props);
     
    this.state = {
      name: '',
      phone: '',
      email: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value})
}

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    }
    this.setState({
      name: '',
      phone: '',
      email: ''
    });
    this.props.createContact(contact);
  }

  listView(data, contact){
    return (
      <div>
        <div className = "container">
          <div key={contact}>
            <h3>Name: {data.name}</h3>
            <h3>Phone: {data.phone}</h3>
            <h3>Email: {data.email}</h3>
          </div>
        </div>
        <div>
          <button onClick={(e) => this.deleteContact(e, contact)}>
            Delete
          </button>
        </div>
    </div> 
    )
  }

  deleteContact(e, contact){
    e.preventDefault();
    this.props.deleteContact(contact);
  }

  render() {
    return(
      <div className="container">
        <h1>Redux Contacts</h1>
        <div >
          <h3>Add New Contact</h3>
          <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                onChange={this.handleChange} 
                placeholder="Enter Name" 
                value={this.state.name} 
                name="name"
              />
             
              <input 
                type="text" 
                onChange={this.handleChange} 
                placeholder="Enter Phone" 
                value={this.state.phone} 
                name="phone"
              />
              <input 
                type="text" 
                onChange={this.handleChange} 
                placeholder="Enter Email" 
                value={this.state.email} 
                name="email"
              />
            <br/>
            <br/>
            <input 
              type="submit" 
              value="SUBMIT"
              className="button"
            />
            <hr/>
          </form>
          
          { <div className = "contactBox">
            <h2>Contact List</h2>
            <p>
              {this.props.contacts.map((contact, i) => this.listView(contact, i))}
              </p>
            </div> }
        </div>
        
        
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: contact =>dispatch(contactAction.deleteContact(contact))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
