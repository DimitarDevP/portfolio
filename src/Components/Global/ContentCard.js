import React from 'react'

import './ContentCard.css'

export default function ContentCard(props) {
    return (
        <div className="ContentCard">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
