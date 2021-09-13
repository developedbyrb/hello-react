import React from 'react'
import faker from 'faker'

function About() {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>{`${faker.lorem.paragraph()}`}</p>
        </div>
    )
}

export default About
