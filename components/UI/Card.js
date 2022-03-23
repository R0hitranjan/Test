import React from 'react';
import './Card.css';

function Card(props) {
    //there is a space after card in below line
    let classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )

}


export default Card; 