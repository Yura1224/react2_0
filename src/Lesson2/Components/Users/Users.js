import User from "../User/User";

export default function Users({items, appFn}) {
    return (
        <div>
            {
                items.map((value)=><User key={value.id} item={value} appFn={appFn}/>)
            }
        </div>
    );
}
