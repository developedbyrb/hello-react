import React from 'react'
import './App.css';

const Card = (props) => {
    console.log('props', props);
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{ width: '100%' }}></img>
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <input type="text" onChange={props.onChangeInput} value={props.name} />
                <p>{props.title}</p>
                <p><button className="button" onClick={props.onChangeName}>Change Name</button></p>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card
