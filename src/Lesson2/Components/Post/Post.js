export default function Post({postsUsers1}) {

    return (
        <div>
            {postsUsers1.userId} - {postsUsers1.title}
            - <button>Click me</button>
        </div>


    );
}