import React from 'react'
import './App.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{ width: '100%' }}></img>
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Card
