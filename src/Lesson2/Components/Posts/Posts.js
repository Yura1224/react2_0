import Post from "../Post/Post";

export default function Posts({postsUsers}) {
    return (
        <div>
            {
                postsUsers.map((value) => <Post key={value.id}  postsUsers1={value}/>)
            }
        </div>
    );
}