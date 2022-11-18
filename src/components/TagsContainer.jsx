import React from 'react';
import PropTypes from "prop-types";

const TagsContainer = ({handleTagsSelection, toggleAddTagButton, tags}) => {
    return(
        <div className="tags-container">
            {Object.keys(tags).map(
                tag => <button key={tag} className={"tag " + tags[tag]} onClick={handleTagsSelection} name={tag}>{tag}</button>
            )}
            <button className="material-symbols-outlined add-button" onClick={toggleAddTagButton}>add_box</button>
        </div>
    )
}

TagsContainer.propTypes = {
    handleTagsSelection: PropTypes.func,
    toggleAddTagButton: PropTypes.func,
    tags: PropTypes.object
}

export default TagsContainer;