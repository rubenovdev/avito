import React from 'react'

function Comment({ comment }) {
  const { id, author, comment: commentText, score } = comment
  return (
    <article key={id}>
      <p>{commentText}</p>
      <p>
        {author}, {score}
      </p>
    </article>
  )
}

export default Comment
