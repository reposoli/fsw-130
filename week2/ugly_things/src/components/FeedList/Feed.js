import React from 'react';
const Feed = (props) => {
    

    return (
        <div className="post">
            <div className="tweetBody">
                <p className="name">{props.item.name}</p>
                <img className="picture" src={props.item.imageName} alt="fruitpicture"/>
                <p className="uglypost">{props.item.message}</p>
                
            </div>
        </div>
    )
}

export default Feed;