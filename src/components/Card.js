import React from 'react'
import '../App.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <input type="text" onChange={props.onChangeName} value={props.name} />
                <p>{props.phone}</p>
                <p><button className="button red" onClick={props.onDelete}>Delete</button></p>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card
