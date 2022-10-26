import React from 'react';

const TitleBar = (props) => {
    return (
        <div className="title-bar">
            <h1 className="title">{props.title}</h1>
        </div>
    );
};


export default TitleBar;