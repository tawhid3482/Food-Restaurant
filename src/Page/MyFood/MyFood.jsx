import { useLoaderData } from "react-router-dom";
import MyFoodItems from "./MyFoodItems";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import { useEffect, useState } from "react";

const MyFood = () => {
  const [myfoods, setMyFodds] = useState([]);

const {user}=UseAuth()
const url = `http://localhost:5000/services?email=${user?.email}`
useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setMyFodds(data);
    });
}, []);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Pepper-My Food</title>
      </Helmet>
      <p className="text-center text-3xl font-bold m-3">YOUR FOOD ITEMS</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">

        {
          myfoods?.map((foods)=><MyFoodItems key={foods._id} foods={foods}></MyFoodItems>)
        }
      </div>
    </div>
  );
};

export default MyFood;
