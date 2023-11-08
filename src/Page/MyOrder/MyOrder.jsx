import MyOrderCard from "./MyOrderCard";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import { useEffect, useState } from "react";

const MyOrder = () => {
  const [orders, setorders] = useState([]);
  const { user } = UseAuth();
  const url = `https://assingment-11-server-site-iota.vercel.app/order?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setorders(data);
      });
  }, []);

  return (
    <div className="">
      <Helmet>
        <title>Pepper-My Order</title>
      </Helmet>
      <p className="text-center text-3xl font-bold m-3">YOUR ORDER ITEMS</p>
      <div className="grid grid-cols-1 gap-5 ">
        {
          orders.map((order)=><MyOrderCard key={order._id} order={order}></MyOrderCard>)
        }
      </div>
    </div>
  );
};

export default MyOrder;
