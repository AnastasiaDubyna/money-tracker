import React, {Component} from 'react';

class TagsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddButtonClicked: false,
            tagName: "",
            colors: ["brown", "green", "orange"],
            selectedColor: "brown"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleColorSelection = this.handleColorSelection.bind(this);
    }
    handleChange(e) {
        this.setState({
            tagName: e.target.value
        });
    }
    handleClick() {
        this.setState(prevState => ({
            isAddButtonClicked: !prevState.isAddButtonClicked,
            tagName: ""
        }));
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleTagsAddition(this.state.tagName, this.state.selectedColor);
        this.handleClick();
    }
    handleColorSelection(e) {
        e.preventDefault();
        this.setState({
            selectedColor: e.target.name
        })
    }
    render() {
        console.log(this.state);
        if (this.state.isAddButtonClicked) {
            return (
                <form className="add-new-tag-form" onSubmit={this.handleSubmit}>
                    <h3>Tags</h3>
                    <input name="tagName" placeholder="name" value={this.state.tagName} onChange={this.handleChange} />
                    <div className="circles-container">
                        {
                            this.state.colors.map(color => (
                                <button name={color.toString()} className={"color-circle " + color} onClick={this.handleColorSelection} />
                            ))
                        }
                    </div>
                    <button type="submit">Add</button>
                </form>
            )
        } else {
            return(
                <div className="tags-container">
                    {Object.keys(this.props.tags).map(
                        tag => <button key={tag} className={"tag " + this.props.tags[tag]} onClick={this.props.handleTagsSelection} name={tag}>{tag}</button>
                    )}
                    <button className="material-symbols-outlined add-button" onClick={this.handleClick}>add_box</button>
                </div>
                )
        }
    }
}

export default TagsContainer;