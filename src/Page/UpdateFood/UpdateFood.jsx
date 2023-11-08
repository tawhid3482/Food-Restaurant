import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import UseAuth from "../../Hooks/UseAuth/UseAuth";

const UpdateFood = () => {
  const products = useLoaderData();
  const { user } = UseAuth();
  const navigate = useNavigate();
  
  const { _id, foodName, foodCategory, price, quantity, foodOrigin, foodImage } = products;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodCategory = form.foodCategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const foodOrigin = form.foodOrigin.value.toLowerCase();
    const Description = form.Description.value;
    const foodImage = form.foodImage.value;
    const Email = form.Email.value;

    const updateProduct = {
      foodName,
      foodCategory,
      price,
      quantity,
      foodOrigin,
      Description,
      foodImage,
      Email,
    };

    try {
      const response = await fetch(`https://assingment-11-server-site-iota.vercel.app/services/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.modifiedCount > 0) {
          swal("Success", "Your Product Updated", "success");
          form.reset();
          navigate("/myFood");
        } else {
          swal("Error", "Something went wrong", "error");
        }
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      swal("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="md:w-3/4 mx-auto">
      <Helmet>
        <title>Pepper-Update Food</title>
      </Helmet>
      <div className="bg-blue-200 p-5 dark:bg-slate-700 dark:text-slate-300">
        <h2 className="text-5xl font-extrabold text-center mb-3">
          Update Your Food
        </h2>
        <p className="text-lg text-center mb-3">
          If you want to update any food, fill in the information below.
        </p>
        <form onSubmit={handleUpdate}>
          {/* Form fields */}
          <div className="md:flex gap-3 mb-8">
            {/* Food Name */}
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

            {/* Food Category */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="foodCategory"
                  placeholder="Food Category"
                  defaultValue={foodCategory}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Price and Quantity */}
          <div className="md:flex gap-3 mb-8">
            {/* Price */}
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

            {/* Quantity */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  defaultValue={quantity}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Description and Food Origin */}
          <div className="md:flex gap-3 mb-8">
            {/* Description */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <textarea
                  name="Description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* Food Origin */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Origin</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="foodOrigin"
                  placeholder="Food Origin"
                  defaultValue={foodOrigin}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Food Image URL and User Email */}
          <div className="md:flex gap-3 mb-8">
            {/* Food Image URL */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="foodImage"
                  placeholder="Food Image"
                  defaultValue={foodImage}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* User Email */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Email</span>
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
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Update Product"
            className="btn btn-block bg-gray-300"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
