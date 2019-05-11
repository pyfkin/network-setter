import React from 'react';

export default ({onClick}) => {
    const styles = {
        fill: '#2196F3',
    };

    return (
            <svg width="25" height="25" viewBox="4 1 25 25" style={styles} onClick={onClick}>
                <path d="M23.1,10.5c0,4.1-3.4,7.5-7.5,7.5s-7.5-3.4-7.5-7.5S11.5,3,15.6,3c1.9,0,3.6,0.7,5,
                1.9l-0.2-3.2l1-0.1l0.3,5l0,0l0,0l-5,0.3l-0.1-1L20,5.7C18.8,4.6,17.3,4,15.6,4C12,4,9.1,6.9,9.1,10.5S12,
                17,15.6,17s6.5-2.9,6.5-6.5H23.1z"/>
            </svg>
    )
};