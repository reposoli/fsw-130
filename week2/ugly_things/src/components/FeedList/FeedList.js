import React from 'react';
import feedData from './feedData.json';
import Feed from "./Feed";

class FeedList extends React.Component {
    constructor() {
        super()
        this.state = {
            feed: feedData
        }
    }
    
    render () {
        const feedList = this.state.feed.map(item => <Feed key={item.id} item={item}/>)
        return (
            <div className = "postContainer">
            {feedList}
            </div>
            
        )
    }
}

export default FeedList;