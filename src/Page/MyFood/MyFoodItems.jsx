import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const MyFoodItems = ({ foods }) => {
  const {_id, foodName, foodImage, foodCategory, price,  foodOrigin } =
    foods;


  return (
    <div>
      <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl m-5">
        <figure>
          <img
            src={foodImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Food Name: {foodName}</h2>
          <p className="text-lg">Food Category: {foodCategory}</p>
          <p className="text-lg"> Price: ${price}</p>
          <p className="text-lg"> Food Origin: {foodOrigin}</p>
          {/* <p>{Description}</p> */}
          <div className="card-actions justify-end">
           <Link to={`/update/${_id}`}> 
           <button className="btn text-blue-400 text-2xl"> <FiEdit /> </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodItems;
