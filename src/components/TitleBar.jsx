import React, {Component} from 'react';

class TitleBar extends Component {
    render() {
        return (
            <div className="title-bar">
                <h1 className="title">{this.props.title}</h1>
            </div>
        );
    }
}

export default TitleBar;