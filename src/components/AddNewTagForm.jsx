import React, {useState} from 'react';

const AddNewTagForm = ({handleTagsAddition, toggleAddTagButton}) => {
    const [newTagName, setNewTagName] = useState("");
    const [colors] = useState(["brown", "green", "orange"]);
    const [selectedColor, setSelectedColor] = useState("brown");

    const handleChange = (e) => {
        setNewTagName(e.target.value);
    }
    const handleColorSelection = (e) => {
        e.preventDefault();
        setSelectedColor(e.target.name);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleTagsAddition(newTagName, selectedColor);
        toggleAddTagButton();
    }

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
    );
};

export default AddNewTagForm;