import { useEffect, useState } from "react";

const UseFood = () => {
    const [foods , setFoods]=useState()
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return [foods]
};

export default UseFood;