import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(<div>
        <h2>OOOPS!</h2>
        <h2> SOMETHING WENT WRONG</h2>
        <p>{err.status} : {err.statusText}</p>
    </div>
    )
}
export default Error;