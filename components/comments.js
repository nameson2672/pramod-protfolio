import Comment from "./comment"

export default function Comments({ comments = [] }) {
  return (
    <>
      
        {comments?.map(({ _id, createdAt, name, email, comment }) => (
          <Comment key={_id} id={_id} createdAt={createdAt} name={name} email={email} comment={comment}/>
        ))}
    </>
  )
}

