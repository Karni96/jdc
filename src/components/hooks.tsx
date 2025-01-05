
import { useState } from "react";


function Hooks() {

    let [counter, setcounter ] = useState(10)
    const  addValue = () => {
        console.log("clicked", counter );
         counter = counter + 1
        setcounter(counter )
    }
    const Event = () =>{
        console.log("clicked", counter);
        counter = counter -1
        setcounter (counter) 
        if (counter <= 0 ){
            console.log("this is end point");
            
        }
    }
    return(
        <>
            <h1>counter value : {counter} </h1>     <br />
            <button onClick={addValue}> 
            click me to increase countdown  </button>
            <br />
            <button onClick={Event}>click me to reduce countdown   </button>
        </>
    )
}
export default Hooks