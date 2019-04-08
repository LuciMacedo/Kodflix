import React from 'react';
import {Link} from 'react-router-dom';

export default function Stack(props) {
    return (
        <Link to={`${props.id}`} className='movie'>
            <img src={props.cover} alt={`${props.name}`} />
            <div className='overlay'><h3>{props.name}</h3></div>
        </Link>   
    );           
}