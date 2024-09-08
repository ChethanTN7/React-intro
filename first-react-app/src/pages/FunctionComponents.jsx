import React, {useState} from "react";
import BaseHoc from "../hoc/BaseHoc";

const FunctionComponent = () =>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Unknown")
    const reduceCount = () =>{
        setCount(count - 1);
    }
    return(
        <div>
            <p>Function Components</p>
            <button onClick={()=>setCount(count + 1)}>Click to increment</button>
            <button onClick={reduceCount}>Click to decrement</button>
            <h2>{count}</h2>

            <input type="text" onChange={(e) => setName(e.target.value)} />
            <h4>Hello {name}</h4>
            <button>Change Name</button>
        </div>
    )
}

export default BaseHoc(FunctionComponent);