import React from 'react';
import NavigationBar from "./NavigationBar";
import TitleBar from "./TitleBar";

const PageBase = (props) => {
    return (
        <div className="page-base">
            <NavigationBar active={props.active}/>
            <TitleBar title={props.title} />
            {props.children}
        </div>
    )
}

export default PageBase;