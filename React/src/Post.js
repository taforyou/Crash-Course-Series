import React from 'react'
import PropTypes from 'prop-types'

function Post({ id, title, img, removePost }) {
  return (
    <div className='Post'>
      <button className='Post__delete' onClick={() => removePost(id)}>
        X
      </button>
      <div className='Post__title'>{title}</div>
      <img
        className='Post__image'
        // src={`https://source.unsplash.com/random?sig=${id}`}
        src={`${img}`}
      />
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  removePost: PropTypes.func.isRequired,
}

export default Post
