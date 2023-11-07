import swal from "sweetalert";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import { Helmet } from "react-helmet";

const AddProduct = () => {
  const {user}=UseAuth()
  console.log(user)
  const handleAdd = (e) => {
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

    const newProducts = {
      foodName,
      foodCategory,
      price,
      quantity,
      foodOrigin,
      Description,
      foodImage,
      Email
    };

    console.log(newProducts);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          swal("Successfully", "You Food Addedd", "success");
          form.reset();
        } else {
          swal("error!", "Something wrong", "error");
        }
      });
  };

  return (
    <div className="md:w-3/4 mx-auto">
        <Helmet>
                <title>Pepper-Add Food</title>
            </Helmet>
      <div className="bg-blue-200  p-5  dark:bg-slate-700 dark:text-slate-300  ">
        <h2 className="text-5xl font-extrabold text-center mb-3">
          Add Your Food
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
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="foodCategory"
                  placeholder="Food Category"
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
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-3 mb-8 ">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Description"
                  placeholder="Description"
                  defaultValue="Food is a vital aspect of human life, providing nourishment, pleasure, and cultural significance. It encompasses a wide variety of flavors, textures, and aromas, reflecting the rich diversity of cultures and cuisines around the world."
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text"> Food Origin</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="foodOrigin"
                  placeholder="Food Origin"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-3 mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="foodImage"
                  placeholder="Food Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
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
          <input
            type="submit"
            value="Add Products"
            className="btn btn-block bg-gray-300"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
