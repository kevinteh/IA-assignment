import React from 'react';
import './Text.css';

const Text = (props) => {
    return(
        <span className={["text", props.class].join(" ")}>{props.text}</span>
    );
}

export default Text;