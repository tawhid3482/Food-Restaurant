import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyFoodItemsShow = ({ food }) => {
    
  const { _id, foodName, foodImage, price } = food;

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
        fetch(`https://assingment-11-server-site-iota.vercel.app/servers/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your food item has been deleted.",
                "success"
              );
              navigate("/myFoodItems");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side h-60 w-4/5 bg-base-200 shadow-xl">
        <figure className="w-1/2">
          <img src={foodImage} className="w-full" alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <p>Price: ${price}</p>
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

export default MyFoodItemsShow;













// const MyFoodItemsShow = ({food}) => {
//     console.log(food)
//     const { foodName, foodImage, price } = food;

//     return (
//         <div>
//             <div className="card w-96 bg-base-100 shadow-xl">
//         <figure className="px-10 pt-10">
//           <img
//             src={foodImage}
//             alt="Shoes"
//             className="rounded-xl"
//           />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">{foodName}</h2>
//           <p>Price: ${price}</p>
//           {/* <div className="card-actions">
//             <button className="btn btn-primary">Buy Now</button>
//           </div> */}
//         </div>
//       </div>
//         </div>
//     );
// };

// expo