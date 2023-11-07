import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import MyFoodItemsShow from "./MyFoodItemsShow";

const MyFoodItems = ({ foods }) => {
  const { user } = UseAuth();
  const { Email } = foods;
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    if (user?.email === Email) {
      setMyFoods([myFoods]);
    }
  }, [user?.email, Email, foods]);

  return (
    <div>
      {myFoods?.length > 0 ? (
        myFoods.map((food) => (
          <MyFoodItemsShow key={food._id} food={food}></MyFoodItemsShow>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MyFoodItems;
