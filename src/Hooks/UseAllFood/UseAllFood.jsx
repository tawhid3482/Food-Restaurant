import { useEffect, useState } from "react";

const UseAllFood = () => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    fetch(
      "http://localhost:5000/services"
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return [foods];
};

export default UseAllFood;
