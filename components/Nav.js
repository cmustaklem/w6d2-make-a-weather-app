import React from 'react'
import { Link } from 'react-router'

const Footer = (props) => {
    return <div>
       <h1>Content Management System</h1>
       <Link to="/">
       <button type="button" className="btn btn-default">Home</button>
       </Link>

       <Link to="/page">
       <button type="button" className="btn btn-default">Page</button>
       </Link>

       <Link to="/editor">
       <button type="button" className="btn btn-default">Editor</button>
       </Link>

       </div>
}
