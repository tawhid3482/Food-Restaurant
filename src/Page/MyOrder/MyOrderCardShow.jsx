import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { RiDeleteBinLine } from "react-icons/ri";


const MyOrderCardShow = ({orders}) => {
    const {_id, foodName, foodImage, price, quantityNeed } = orders;

  const newPrice = price * quantityNeed;

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
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side h-60 w-4/5  bg-base-200 shadow-xl">
        <figure className="w-1/2">
          <img src={foodImage} className="w-full" alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <h2 className=""> Quantity Need: {quantityNeed} pieces</h2>
          <p>Price: ${quantityNeed ? newPrice : price}</p>
          <div className="card-actions justify-end">
            <button onClick={handleDelete} className="btn">
              <RiDeleteBinLine className="text-2xl text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCardShow;