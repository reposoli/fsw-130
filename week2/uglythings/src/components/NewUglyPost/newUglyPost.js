  
import React, { Component } from 'react';
import PostList from '../PostList/postList';
import './uglyPost.css';
import FeedList from "../FeedList/FeedList";

class NewUglyPost extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            imageName: "",
            textArea: "",
            posts: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleDelete = (i) => {
        let removeUglyPost = this.state.posts
        removeUglyPost.splice(i, 1)
        this.setState( { posts: removeUglyPost })
    }

    handleEdit = (i, changes) => {
        this.setState(prevState => {
        let editedUglyPost = prevState.posts
        const index = editedUglyPost.findIndex(uglyPost=> uglyPost.id === i)
        const updatedUglyPost = Object.assign(editedUglyPost[index], changes)
        return ({ updatedUglyPost })})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let editedPost = {
            userName: this.state.userName,
            imageName: this.state.imageName,
            textArea: this.state.textArea
        }
        this.setState({ 
            posts : [ editedPost, ...this.state.posts ], 
            userName: "",
            imageName: "",
            textArea: ""
        })
    }

    render() {
        return (
            <div>
                    
               
                <form className="postWrapper" id="tweetArea" onSubmit={this.handleSubmit}>
                    <h1 className = "homeWords">Show Me Your Ugly Fruit!</h1>
                    <input
                        className="userName"
                        type="text"
                        name="userName"
                        value={this.state.userName} 
                        placeholder="Ugly Fruit Title" 
                        onChange={this.handleChange}
                        minLength="5"
                        required={true}
                    />
                    <input
                        className="atName"
                        type="text"
                        name="imageName"
                        value={this.state.imageName} 
                        placeholder="Image Url" 
                        onChange={this.handleChange}
                        minLength="5"
                        required={true}
                    />
                    <button className="button">Post</button>
                    <div className="textArea">
                        <textarea
                            className="textBox"
                            form="tweetArea"
                            name="textArea"
                            placeholder="Decribe Your Ugly Fruit Here..."
                            value={this.state.textArea}
                            rows="8"
                            cols="62"
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                    </div>
                    
                </form>
                <div className = "post">
                
                <div className ="tweetBody">
                    <PostList
                    posts={this.state.posts}
                    handleEdit={(i, edits) => {
                        this.handleEdit(i, edits)}}
                    handleDelete={this.handleDelete}
                />
                <FeedList />
                
                </div>
            </div>
            </div>
        );
    }
}


export default NewUglyPost;