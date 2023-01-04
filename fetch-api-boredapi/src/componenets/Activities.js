import { useEffect, useState } from 'react';

const Activities = () =>{
   
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    const loadActivity = () => {
        setIsloading(true)
        fetch("https://www.boredapi.com/api/activity")
            .then((response) => response.json())
            .then((data) => {
                setActivity(data.activity);
                setIsloading(false)
            });   
    };
    const [activity, setActivity ]  = useState([])
    const [isLoading, setIsloading ]  = useState(true)
    useEffect(() => {loadActivity()},[] );

    if (isLoading){
        return <p> Loading... </p>
    }

    return(
        <>
        <div>
            <h1>{activity}</h1> 
        </div>
        <div>
            <button class= "btn btn-primary" onClick={loadActivity}>Get you phrase</button>
        </div>
        </>
        )
}


export default Activities;