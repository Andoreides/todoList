import React, {useState} from 'react';
import './MyButton.css';
export function MyButton(props) {


    return (
        <button onClick={props.onClick} className='gradient-button' >{props.title}</button>
    )
}