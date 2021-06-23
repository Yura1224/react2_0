export default function Menu({pages}) {
    console.log(pages)
    return (
        <ul>
            {
                pages.map(page => <li key={page}>{page}></li>)
            }
        </ul>
    );
}