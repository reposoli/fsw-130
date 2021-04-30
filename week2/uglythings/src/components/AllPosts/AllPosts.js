  
import React, { useState } from 'react';
import './posts.css';
import EditUglyPost from '../EditUglyPost/EditUglyPost'


const UglyPost = ({ i, userName, imageName, textArea, handleDelete, handleEdit }) => {
const [edit, setEdit] = useState({ editing: false, id: 0 })

    return (
        <div>
            <p className="name">{userName}</p><br/>
            <img className="picture" src={imageName} alt="fruitpicture"/>
            <p className="post"> {textArea}</p>
            <div>
                <button className="editButton" onClick={() => setEdit({ makeEdits: true, id: i })}> Edit </button>
                <button className="deleteButton" onClick={() => handleDelete (i) }> Delete </button>
                {edit.makeEdits ? <EditUglyPost
                    i = {i}
                    handleEdit={(i, edits) => {
                    handleEdit(i, edits)
                    setEdit({makeEdits: false, id: i})
                    }}/>: <p></p> }
            </div>   
        </div>
    );
}

export default UglyPost;