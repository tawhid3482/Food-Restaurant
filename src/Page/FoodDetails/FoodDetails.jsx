import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FoodDetailsShow from "./FoodDetailsShow";
import { Helmet } from "react-helmet";

const FoodDetails = () => {
  const [productsDetails, setProductsDetails] = useState(null);
  const products = useLoaderData();
  // console.log(products)
  const { _id } = useParams();

  useEffect(() => {
    const findProducts = products?.find((product) => product?._id == _id);
    setProductsDetails(findProducts);
  }, [_id, products]);

  return (
    <div>
      <Helmet>
                <title>Pepper-Food Details</title>
            </Helmet>
      <div className="">
        {productsDetails ? (
          <FoodDetailsShow productsDetails={productsDetails}></FoodDetailsShow>
        ) : (
          <div className="text-center text-4xl">
            <progress
              className="progress progress-error w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
