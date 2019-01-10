import React from 'react';
import './Link.css';

const Link = (props) => {
    return(
        <a className={["btn-style-link", props.class].join(" ")} onClick={props.onclick}>{props.text}</a>
    );
}

export default Link;