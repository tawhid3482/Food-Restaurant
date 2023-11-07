import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const FoodServiceDetailsShow = () => {
  const products = useLoaderData();
  console.log(products)
  const [productsDetails, setProductsDetails] = useState(null);
  const {  foodName, foodImage, foodCategory, price ,Description,foodOrigin} = productsDetails;
  const { _id } = useParams();

  useEffect(() => {
    const findProducts = products?.find((product) => product?._id == _id);
    setProductsDetails(findProducts);
  }, [_id, products]);
  // console.log(data)
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl dark:bg-slate-700 dark:text-slate-100">
        <figure className="w-2/3">
          <img src={foodImage} className="w-2/3 h-[400px]" alt="Album" />
        </figure>
        <div className="card-body w-1/3">
          <h2 className="card-title text-3xl font-bold">{foodName}</h2>
          <h2 className="card-title text-3xl">{foodCategory}</h2>
          <h2 className="text-lg font-semibold  ">
            {Description}
          </h2>
          <h2 className="text-lg font-semibold  ">
            {foodOrigin}
          </h2>
          
          <h3 className="text-2xl font-semibold text-blue-600 ">Price ${price}</h3>
          <div className="card-actions justify-end">
            <button className="btn bg-blue-400 text-white">order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodServiceDetailsShow;
