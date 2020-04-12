import React from 'react';
import './searchBox.css';

export default function SearchBox (props){
    return(
        <input className = "search"
                type = 'search' 
                placeholder = {props.placeholder} 
                onChange = {props.onchange}/>
    )
}