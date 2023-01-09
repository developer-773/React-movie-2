import React, { useRef, useState } from 'react'

const CommentsAddForm = ({addComment}) => {

  const inputRef = useRef()


  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    addComment(inputRef.current.value)
  }


  return (
    <form className='d-flex' onSubmit={handleFormSubmit}>
    <input
        type="text"
        placeholder="Enter your comments..."
        className="form-control new-post-label"
        ref={inputRef}
    />
    <button
    style={{backgroundColor: "#000"}}
        className="btn text-white"
        type="submit"
    >
      Add
    </button>
</form>
  )
}

export default CommentsAddForm