import swal from "sweetalert";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
  const { user } = UseAuth();

  const data = useLoaderData();
  console.log(data);

  const { foodName, foodImage, price } = data;
  // console.log(foodImage);

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const displayName = form.displayName.value;
    const price = form.price.value;
    const quantityNeed = form.quantityNeed.value;
    const Email = form.Email.value;
    const date = form.date.value;

    // if ( quantity === 'undefined' || quantity === 0)  {
    //     swal("error!", "Sorry you cannot buy this food ", "error");
    //     return
    //   }

    const PurchaseFood = {
      foodName,
      displayName,
      price,
      quantityNeed,
      Email,
      date,
      foodImage,
      
    };

    console.log(PurchaseFood);

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(PurchaseFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          swal("Successfully", "You Purchase Food ", "success");
          form.reset();
        } else {
          swal("error!", "Something wrong", "error");
        }
      });
  };

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="md:w-3/4 mx-auto">
      <Helmet>
        <title>Pepper- Order</title>
      </Helmet>
      <div className="bg-blue-200  p-5  dark:bg-slate-700 dark:text-slate-300  ">
        <h2 className="text-5xl font-extrabold text-center mb-3">
          Purchase Your Food
        </h2>
        <p className="text-lg text-center mb-3">
          If you want add any food so fill the information
        </p>
        <form onSubmit={handleAdd}>
          <div className="md:flex gap-3 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="foodName"
                  placeholder="Food Name"
                  defaultValue={foodName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Buyer Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="displayName"
                  placeholder="Buyer Name"
                  value={user?.displayName || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-3 mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  defaultValue={price}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantityNeed"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-3 mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Email"
                  placeholder="Buyer Email"
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Buying Date</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="date"
                  placeholder="Buying Date"
                  value={currentDate}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-3 mb-8 ">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Food Image </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="foodImage"
                  placeholder="Food Image"
                  value={foodImage}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Purchase"
            className="btn btn-block text-blue-500 bg-gray-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Order;
