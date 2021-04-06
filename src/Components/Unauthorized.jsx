import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Unauthorized extends Component {
    render() {
        return (
            <div>
                <h1>Unauthorized</h1>
                <Link to="/"><button className="btn btn-success">Home</button></Link>
            </div>
        )
    }
}

export default Unauthorized
