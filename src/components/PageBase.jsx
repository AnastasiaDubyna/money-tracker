import React from 'react';
import NavigationBar from "./NavigationBar";
import TitleBar from "./TitleBar";

const PageBase = () => {
    return (
        <div className="page-base">
            <NavigationBar active={this.props.active}/>
            <TitleBar title={this.props.title} />
            {this.props.children}
        </div>
    )
}

export default PageBase;