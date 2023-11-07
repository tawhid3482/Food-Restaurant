
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";


const MyOrderCard = ({ order }) => {
  console.log(order)
  const {_id, foodName, foodImage, price, quantityNeed } = order;
  
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
              setTimeout(() => {
                window.location.reload();  
            }, 1*1000);
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

export default MyOrderCard;










// import { RiDeleteBinLine } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const MyOrderCard = ({ order }) => {
//   // console.log(order)
//   const { _id, foodName, foodImage, price, quantityNeed } = order;

//   const newPrice = price * quantityNeed;

//   const navigate = useNavigate();

//   const handleDelete = (_id) => {
//     console.log(_id);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(` http://localhost:5000/order/${_id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             if (data.deletedCount > 0) {
//               Swal.fire(
//                 "Deleted!",
//                 "Your product has been deleted.",
//                 "success"
//               );
//               navigate("/myOrder");
//             }
//           });
//       }
//     });
//   };

//   return (
//     <div>
//       <div className="card card-side h-60 w-4/5  bg-base-200 shadow-xl">
//         <figure className="w-1/2">
//           <img src={foodImage} className="w-full" alt="img" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{foodName}</h2>
//           <h2 className=""> Quantity Need: {quantityNeed} pices</h2>
//           <p>Price: ${
//             quantityNeed ? 
//           newPrice : price
//           }</p>
//           <div className="card-actions justify-end ">
//             <button onClick={() => handleDelete(_id)} className="btn ">
//               <RiDeleteBinLine className="text-2xl text-blue-400" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyOrderCard;
