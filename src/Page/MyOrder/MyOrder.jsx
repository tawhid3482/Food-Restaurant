import { useLoaderData } from "react-router-dom";
import MyOrderCard from "./MyOrderCard";
import { Helmet } from "react-helmet";

const MyOrder = () => {
  const data = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>Pepper-My Order</title>
      </Helmet>
      <div className="grid grid-cols-1 gap-5 m-10">
        {data?.map((order) => (
          <MyOrderCard key={order._id} order={order}>
            {" "}
          </MyOrderCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
