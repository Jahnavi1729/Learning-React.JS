import logo from './logo.svg';
import React,{useState, useEffect, useReducer} from "react";

function Text(){
    const [val, setVal] = useState("")
    const [val2, setVal2] = useState("")
    useEffect(() => {
        console.log(`field 1: ${val}`)
    }, [val])
    useEffect(() => {
        console.log(`field 2: ${val2}`)
    }, [val2])
    return(
        <>
        <label>
            Favorite phrase
            <input 
            value = {val}
            onChange = {e => setVal(e.target.value)}
            />
        </label>
        <label>
            second Favorite phrase : {val2}
            <input
            value = {val2}
            onChange = {e => setVal2(e.target.value)}

            />
        </label>
        </>

    );

}

function Checkbox(){
   // const [checked, setChecked] = useState(false);
    useEffect(() => {
        console.log(`checked: ${checked.toString()}`)
    })
    const [checked, toggle] = useReducer(checked => !checked, false);
    // function toggle(){
    //     setChecked(checked => !checked);
    // }
    return(
        <>
        <input type="checkbox" value={checked} 
        onChange = {toggle}/>
        {checked ? "checked" : "not checked"}
        </>

    );
}
function GithubUse({login}){
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error)
    }, []);
    if(data){
        return (
            <div>
                <h1>{data.login}</h1>
                <img src ={data.avatar_url} width={100} />
            {/* {JSON.stringify(data)} */}
        </div>
        )
    }
    return null

}

function Fetch(){
    return <GithubUse login="moonhighway" />
}

function Hooks() {
    const [year, setYear] = useState(2000)
    const [manager, setManager] = useState("Alex")
    const [status, setStatus] = useState("Open")
  return (
      <>
      <p>Example of State and effects</p>
      <div>
          <h1>{year}</h1>
          <button onClick={() => setYear(year + 1)}> New year</button>
      </div>
      <div>
          <h1>Manager on duty: {manager}</h1>
          <button onClick={() => setManager("Rachel")}>New manager</button>
      </div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}> Open</button>
      <button onClick={() => setStatus("Back in 5")}> Break</button>
      <button onClick={() => setStatus("Closed")}> Closed</button>
      <div>
      <Checkbox/>

      </div>
      <div>
          <Text/>
      </div>
      <div>
          <Fetch />
      </div>
      </>
   
  )
}

export default Hooks;
