import React, { Component } from 'react';
import UglyPost from '../AllPosts/AllPosts';


class PostList extends Component {
    
    render() {
    const mappedUglyPosts = this.props.posts.map((uglyPost) => { 
      
        return (
            <div className = "postContainer">
            <UglyPost
                key={uglyPost.id}
                index={uglyPost.id}
                userName={uglyPost.userName}
                imageName={uglyPost.imageName}
                textArea={uglyPost.textArea}
                handleDelete={this.props.handleDelete}
                handleEdit={(i, edits) => {
                this.props.handleEdit(i, edits)}}
                uglyPost={uglyPost}
            />
          
            </div>   
            
        );
    })
        return (
            <div className = "post">
                {mappedUglyPosts}
            </div>
        );
    }
}

export default PostList;