import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


 const Comments =  () => {
    let dispatch1 = useDispatch();
    let {comments} = useSelector(state => state);
     console.log(comments);
     const commentsFetch = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/comments');
       const json = await response.json();
       dispatch1({
           type: 'ADD_COMMENTS',
           payload: json
       })
   }

   useEffect(() => {
       commentsFetch()
   }, [])

    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>{comment.name} ==== {comment.body}</li>
            ))}
        </ul>
    )
}
export default Comments
