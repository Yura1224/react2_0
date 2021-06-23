import "./Menu.css";

export default function Menu({pages, classes}) {
    console.log(pages)

    return (
        <ul>
            {
                pages.map(page => <li className={classes.join(' ')} key={page}>{page}></li>)
            }
        </ul>
    );
}