import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (props) {
    return (
        <div className="nav">
            <Link to ="/">Home</Link>
            <Link to ="/Arsenal">Menu</Link>
            <Link to ="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar