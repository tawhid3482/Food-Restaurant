import { useEffect, useState } from "react";

const UseFood = () => {
    const [foods , setFoods]=useState()
    useEffect(()=>{
        fetch('https://assingment-11-server-site-iota.vercel.app/services')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return [foods]
};

export default UseFood;