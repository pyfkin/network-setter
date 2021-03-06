import React from 'react';

function Button({text, btnStyle, onClick, userType}) {
    return (
        <input type={userType} className={`btn btn-user ${btnStyle}`} onClick={onClick} value={text} readOnly={true}/>
    );
}

export default Button;