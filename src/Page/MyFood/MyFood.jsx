import { useLoaderData } from "react-router-dom";
import MyFoodItems from "./MyFoodItems";
import { Helmet } from "react-helmet";

const MyFood = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="">
      <Helmet>
        <title>Pepper-My Food</title>
      </Helmet>
      <div className="grid grid-cols-1  lg:grid-cols-3">
        {data.map((foods) => (
          <MyFoodItems key={foods._id} foods={foods}></MyFoodItems>
        ))}
      </div>
    </div>
  );
};

export default MyFood;
