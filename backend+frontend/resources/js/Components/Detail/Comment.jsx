import React from 'react';
import '../../../css/detail-page.css'
const isComment = (comment) => {
    const result = comment.comment
    return result.map((data,i) => {     
    return <div key={i} className="comment">
            <p><strong className="user"> {data.name}:  {new Date(data.created_at).toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second:'2-digit'
    })}</strong> 
            <strong className="rating"> Rating : {data.rating}/5</strong>
            <br/>{data.comment}</p>
        </div>
    })
};


const noComment = () => {
    return (
        <div className='no-comment'>
            <h2>Film ini belum ada komentar</h2>
        </div>
    )
}

const Comment = (comment) => {
   const commentLen = comment.comment.length
  if (commentLen > 0){
    return isComment(comment)
  } else {
    return noComment()
  }
}

export default Comment;
