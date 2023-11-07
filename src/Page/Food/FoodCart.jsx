import { useState } from "react";
import { Link } from "react-router-dom";

const FoodCart = ({ food }) => {
  const {_id, foodName, foodImage, foodCategory, price } = food;

  const initialCount = parseInt(localStorage.getItem(`count_${_id}`)) || 0;

  const [count, setCount] = useState(initialCount);

  const handleAdd =  () =>{
    const updatedCount = count + 1;
    setCount(updatedCount);
    localStorage.setItem(`count_${_id}`, updatedCount);
  }

  return (
    <div>
      <div className="card mt-5 w-96 h-[420px] bg-base-100 shadow-xl  dark:bg-slate-700 dark:text-slate-100">
        <figure className="px-10 pt-10">
          <img
            src={foodImage}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{foodName}</h2>
          <p className="text-lg">{foodCategory}</p>
          <p className="text-lg">Price: ${price}</p>
          <p className="text-lg">Count: {count}</p>
          <div className="card-actions">
            <div className="">
              <button onClick={handleAdd} className="btn bg-blue-400 text-white">Books</button>
            </div>
          <Link to={`/foodDetails/${_id}`}>
          <button className="btn bg-blue-400 text-white">Details</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
