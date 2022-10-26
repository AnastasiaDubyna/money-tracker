import React, {useState} from 'react';

const TagsContainer = (props) => {
    const [isAddButtonClicked, setAddButtonClicked] = useState(false);
    const [newTagName, setNewTagName] = useState("");
    const [colors] = useState(["brown", "green", "orange"]);
    const [selectedColor, setSelectedColor] = useState("brown");

    const handleChange = (e) => {
        setNewTagName(e.target.value);
    }
    const handleClick = () => {
        setAddButtonClicked(prevState => !prevState);
        setNewTagName("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleTagsAddition(newTagName, selectedColor);
        handleClick();
    }
    const handleColorSelection = (e) => {
        e.preventDefault();
        setSelectedColor(e.target.name);
    }

    if (isAddButtonClicked) {
        return (
            <form className="add-new-tag-form" onSubmit={handleSubmit}>
                <h3>Tags</h3>
                <input name="tagName" placeholder="name" value={newTagName} onChange={handleChange} />
                <div className="circles-container">
                    {
                        colors.map(color => (
                            <button name={color.toString()} className={"color-circle " + color} onClick={handleColorSelection} />
                        ))
                    }
                </div>
                <button type="submit">Add</button>
            </form>
        )
    } else {
        return(
            <div className="tags-container">
                {Object.keys(props.tags).map(
                    tag => <button key={tag} className={"tag " + props.tags[tag]} onClick={props.handleTagsSelection} name={tag}>{tag}</button>
                )}
                <button className="material-symbols-outlined add-button" onClick={handleClick}>add_box</button>
            </div>
        )
    }
}

export default TagsContainer;