import React from 'react';

function Button({text, btnStyle, onClick, usetType}) {

    return (
        <input type={usetType} className={`btn btn-user ${btnStyle}`} onClick={onClick} value={text} readOnly={true}/>
    );
}

export default Button;