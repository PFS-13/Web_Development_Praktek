import React from 'react';
import '../../../css/detail-page.css'
const isComment = (comment) => {
    const result = comment.comment
    return result.map((data,i) => {     
    return <div key={i} className="comment">
            <p><strong className="user"> {data.name}: {data.created_at}</strong> 
            <strong className="rating"> Rating : {data.rating}/5</strong>
            <br/>{data.comment}</p>
        </div>
    })
};


const noComment = () => {
    return (
        <div className='no-comment'>
            <h2>Film ini tidak belum komentar</h2>
        </div>
    )
}

const Comment = (comment) => {
  console.log('comment len: ',comment.comment.length)
   const commentLen = comment.comment.length
  if (commentLen > 0){
    return isComment(comment)
  } else {
    return noComment()
  }
}

export default Comment;
