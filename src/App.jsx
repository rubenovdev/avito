import React, { useState, useEffect } from 'react'
import Comment from './Comment'
import AddCommentPopup from './AddCommentPopup'
import './App.css'

function App() {
  const [comments, setComments] = useState([])
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  useEffect(() => {
    fetch('http://206.189.50.103:3010/review/list')
      .then((response) => {
        if (!response.okey) {
          throw new Error('Запрос не вернул 200')
        }
        response.json()
      })
      .then((comments) => {
        setComments(comments)
      })
      .catch((error) => {})
  }, [])

  const handleAddComment = () => {}

  console.log('comments: ', comments)

  return (
    <div className='App'>
      <div>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
      <button type='button' onClick={handleAddComment}>
        Добавить комментарий
      </button>
      {isOpenPopup && <AddCommentPopup />}
    </div>
  )
}

export default App
