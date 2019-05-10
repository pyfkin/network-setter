import React from 'react';

function Button({text, btnStyle, onClick}) {

    return (
        <button className={`btn btn-user ${btnStyle}`} onClick={onClick}>{text}</button>
    );
}

export default Button;