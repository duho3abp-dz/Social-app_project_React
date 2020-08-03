import React from 'react';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                className="form-control new-post-label"
                type="text"
                placeholder="What are you thinking now?"
            />
            <button 
                className="btn btn-outline-secondary"
                type="submit">
                Add
            </button>
        </form>
    )
}

export default PostAddForm;