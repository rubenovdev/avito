import React, { useState, useEffect } from 'react'

function AddCommentPopup() {
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [score, setScore] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    const isDisabled = comment.length === 0 || name.length === 0

    setIsDisabled(isDisabled)
  }, [])

  const handleChangeComment = (event) => {
    const newValue = event.target.value
    if (newValue.length > 500) {
      return
    }
    setComment(event.target.value)
  }
  const handleChangeName = (event) => setName(event.target.value)
  const handleChangeScore = (event) => setScore(event.target.value)

  const handleAddComment = () => {
    const commentData = {
      author: name,
      comment,
      score,
    }

    fetch('http://206.189.50.103:3010/review/add', {
      method: 'POST',
      body: JSON.stringify(commentData),
    }).then((response) => {
      if (!response.ok) {
      }
    })
  }

  return (
    <div>
      <h2>Добавление комментария</h2>
      <label for='comment'>Введите текст комментария</label>
      <input
        value={comment}
        onChange={handleChangeComment}
        type='text'
        id='comment'
      />

      <label for='name'>Введите имя</label>
      <input value={name} onChange={handleChangeName} type='text' id='name' />

      <label for='score'>Поставьте оценку</label>
      <input
        value={score}
        onChange={handleChangeScore}
        type='number'
        id='score'
      />

      <button type='button' onClick={handleAddComment} disabled={isDisabled}>
        Добавить
      </button>
    </div>
  )
}

export default AddCommentPopup
