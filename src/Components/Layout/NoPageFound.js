import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class NoPage extends Component {
    render () {
        return (
            <div className="Container_height">
                <div className="Container_height flex-column  d-flex justify-content-center align-items-center">
                    <h1>No Page Found</h1>
                   <Link className="btn btn-primary" to="/">Home Page</Link>
                </div>
            </div>
        )
    }
}

export default NoPage