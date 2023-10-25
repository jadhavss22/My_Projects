import { useRouteError } from "react-router-dom"

export const Error = ()=>{
const err = useRouteError()
console.log("err",err);

    return(
        <div>
  <h1>Oops!!!</h1>
        <h2>Something Went Wrong....</h2>
        <h2>{err.status}{err.statusText}</h2>
        </div>
      
    )
}