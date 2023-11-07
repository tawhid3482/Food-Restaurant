import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const FoodDetailsShow = ({ productsDetails }) => {
  // console.log(productsDetails)
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    price,
    Description,
    foodOrigin,
    Email,
  } = productsDetails;

  return (
    <div>
      <Helmet>
        <title>Pepper-Food Details</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl dark:bg-slate-700 dark:text-slate-100">
        <figure className="w-2/3">
          <img src={foodImage} className="w-2/3" alt="Album" />
        </figure>
        <div className="card-body w-1/3">
          <h2 className="card-title text-3xl">{foodName}</h2>
          <h2 className="card-title text-3xl">{foodCategory}</h2>

          <p className="text-lg font-semibold">
            {Description
              ? Description
              : "Food is a vital aspect of human life, providing nourishment, pleasure, and cultural significance. " +
                "It encompasses a wide variety of flavors, textures, and aromas, reflecting the rich diversity of " +
                "cultures and cuisines around the world."}
          </p>

          <p className="text-2xl font-semibold text-blue-600 "> ${price}</p>
          <p className="text-2xl"> {foodOrigin}</p>
          <p className="text-2xl">Add by: {Email}</p>
          <div className="card-actions justify-end">
            <Link to={`/order/${_id}`}>
              <button className="btn bg-blue-400 text-white">Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsShow;
