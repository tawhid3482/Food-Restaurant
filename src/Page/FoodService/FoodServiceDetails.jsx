import { useState } from "react";
import { Link } from "react-router-dom";
import FoodServiceDetailsShow from "./FoodServiceDetailsShow";
const FoodServiceDetails = ({ items }) => {
  const { _id, foodName, foodImage, foodCategory, price, quantity } = items;

  const [productsDetails] = useState(null);


  const initialCount = parseInt(localStorage.getItem(`count_${_id}`)) || 0;

  const [count, setCount] = useState(initialCount);

  const handleAdd =  () =>{

    const updatedCount = count + 1;
    setCount(updatedCount);
    localStorage.setItem(`count_${_id}`, updatedCount);
  }
  
  

  return (
    <div>
      <div className="card card-compact md:w-80 lg:w-96 h-[450px] bg-base-200  dark:bg-slate-700 dark:text-slate-100 shadow-xl">
        <figure>
          <img src={foodImage} className="w-full" alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <p className="text-lg ">{foodCategory}</p>
          <p className="text-lg ">Quantity: {quantity ? quantity : 0}</p>
          <p className="text-lg ">Price: ${price}</p>
          <p className="text-lg ">Count: {count}</p>

          <div className="card-actions justify-end">
            <div className="">
              <button
                onClick={handleAdd}
                className="btn bg-blue-400 text-white"
              >
                Books
              </button>
            </div>

            <Link to={`/foodItemsDetails/${_id}`}>
              <button className="btn bg-blue-400 text-white">Details</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        {productsDetails ? (
          <FoodServiceDetailsShow
            productsDetails={productsDetails}
          ></FoodServiceDetailsShow>
        ) : (
          <div className="text-center text-4xl">
            {/* <progress
              className="progress  w-56"
              value="100"
              max="100"
            ></progress> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodServiceDetails;
