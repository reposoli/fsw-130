import React, { Component } from 'react';
import plantData from "../../plantData.json"

class EditPost extends Component {
    constructor() {
        super()
        this.state={
            location: "",
            
        }
    }
    handleDelete= (i) => {
     let deletePost = this.state.plants
     deletePost.splice(i, 1)
     this.setState({i:deletePost})
 }



     handleEdit = (i, changes) => {
         this.setState(prevState => {
         let editPost = prevState.plants
         const index = editPost.findIndex(plantData => plantData.id === i)
         const updatedPost = Object.assign(editPost[index], changes)
         return ({ updatedPost })})
     }

    render() {
        return(
            <form className="edit-post" >
                <input
                    key={plantData.id}
                    index={plantData.id}
                    className="edit-input"
                    type="text"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleDelete}
                    placeholder="comment"
                    required={true}
                   plantData={plantData}
                />
             
                <button onClick={(e) => {
                    e.preventDefault()
                    this.props.handleEdit(this.props.i, this.state)
                    this.setState( prevState => ({
                        location: ""
                    }))
                    }}className="submit-edit"> add
                </button>
                <button onClick={(e) => {
                    e.preventDefault()
                    this.props.handleEdit(this.props.i, this.state)
                    this.setState( prevState => ({
                        location: ""
                    }))
                    }}className="submit-edit"> edit
                </button>
                <button onClick={(e) => {
                    e.preventDefault()
                    this.props.handleDelete(this.props.i, this.state)
                    this.setState( prevState => ({
                        location: ""
                    }))
                    }}className="submit-edit"> delete
                </button>
              
            </form>
        )
    }
}

export default EditPost;