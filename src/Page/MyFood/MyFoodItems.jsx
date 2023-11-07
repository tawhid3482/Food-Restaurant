import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyFoodItems = ({ foods }) => {
  console.log(foods);
  const { foodName, foodImage, foodCategory, price, Description, foodOrigin } =
    foods;

  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/order/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              navigate("/myOrder");
              setTimeout(() => {
                window.location.reload();
              }, 1 * 1000);
            }
          });
      }
    });
  };

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodItems;
