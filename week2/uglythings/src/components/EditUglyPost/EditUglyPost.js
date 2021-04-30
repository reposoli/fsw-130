import React, { Component } from 'react';


class EditPost extends Component {
    constructor() {
        super()
        this.state={
            userName: "",
            imageName: "",
            textArea: ""
        }
    }
        
    handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value })
    }

    render() {
        return(
            <form className="postWrapper" >
                <input
                    className="edit-input"
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    placeholder="Ugly Fruit Name"
                    required={true}
                    onChange={this.handleChange}
                />
                <input
                    className="edit-input"
                    type="text"
                    name="imageName"
                    value={this.state.imageName}
                    placeholder="image Url"
                    required={true}
                    onChange={this.handleChange}
                /><br/>
                <textarea
                    className="edit-box"
                    form="tweetArea"
                    name="textArea"
                    placeholder="new comment"
                    value={this.state.textArea}
                    rows="4"
                    cols="54"
                    onChange={this.handleChange}
                    minLength="3"
                    required={true}
                />
                    
                <br/>
                <button onClick={(e) => {
                    e.preventDefault()
                    this.props.handleEdit(this.props.i, this.state)
                    this.setState( prevState => ({
                        userName: "",
                        imageName: "",
                        textArea: ""
                    }))
                    }}className="submit-edit"> Submit Edit
                </button>
                
            </form>
        )
    }
}

export default EditPost;