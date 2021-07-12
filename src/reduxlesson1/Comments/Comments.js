import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";


 const Comments =  () => {
    let dispatch1 = useDispatch();
    let {comments} = useSelector(state => state);

     console.log(comments);


     const [flag, setFlag] = useState(false)


     const commentsFetch = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/comments');
       const json = await response.json();
       dispatch1({
           type: 'ADD_COMMENTS',
           payload: json
       })
   }

   // useEffect(() => {
   //     commentsFetch()
   // }, [])

     function clik () {
         commentsFetch();
         setFlag(!flag)
     }



    return (
        <div>
        {/*<button*/}
        {/*    onClick={(commentsFetch) => {*/}
        {/*        dispatch1({type: 'Comments of Users'})*/}
        {/*    }}*/}
        {/*>*/}
        {/*    Comments of Users*/}

        {/*<ul>*/}
        {/*    {comments.map(comment => (*/}
        {/*        <li key={comment.id}>{comment.name} ==== {comment.body}</li>*/}
        {/*    ))}*/}
        {/*</ul>*/}
        {/*</button>*/}
            <button onClick={clik}>clik</button>
            {
              flag &&  comments.map(value=> <div>{value.email} - {value.body}</div>)
            }

        </div>
    )

}
export default Comments
