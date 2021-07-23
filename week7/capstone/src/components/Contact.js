import React, {Component} from 'react'
import {ContactContextConsumer} from '../context/ContactContext'
import '../index.css'


class ContactContextProvider extends Component {

  
  render() {
    return (
    
      <ContactContextConsumer>
        {({ name, comment, menuList, handleChange, menuListUpdate, menuDelete}) => (
          <div className="grid-container">
          <form id="form">
            <div className ="column1">
                <h3 className ="menuTitle">Questions & Comments</h3>
                </div>
                <input 
                type = 'text'
                name = 'name'
                className = "inputs"
                value = {name}
                placeholder = "Your Name"
                onChange={handleChange}
                />
            
                <input 
                type = 'text'
                name='comment'
                className = "inputs"
                value = {comment}
                placeholder = " Comment or Question"
                onChange={handleChange}
                /> 

                
               <br /><br />
                <button id="submitButton" onClick={(menuListUpdate)}>Submit</button>
               

          </form>
          <div id="column">

          <ol>
          <h1 className="contactHeader">SOULdier Submissions... </h1>
              {menuList.map((contactInfo, index) => <li id={index} key={index}>
              
              <strong>{contactInfo.name}</strong>

              <p>{contactInfo.comment}</p>

             

              <br /><br />


              <button id={index} onClick={(e) => menuDelete(e.target.id)}>Delete</button>              

              <br /><br />

              <hr />         
              
              </li>)}              
          </ol>
          </div>
          </div>
          
        )}       
      </ContactContextConsumer>
      
    
    )
  }
}

export default ContactContextProvider