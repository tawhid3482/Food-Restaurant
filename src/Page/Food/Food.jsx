import { Link } from "react-router-dom";
import UseFood from "../../Hooks/UseFood/UseFood";
import FoodCart from "./FoodCart";

const Food = () => {
    const [foods] = UseFood()
    
    const limitedFoods = foods?.slice(0, 6);
    return (
        <div className="m-5">
            <h2 className="text-3xl font-bold text-center">Food Items</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
               limitedFoods?.map((food)=><FoodCart key={food._id} food={food}>  </FoodCart>) 
            }
           </div>
         <div className="text-center mt-8">
         <Link to='/food'>
          <button className="btn bg-blue-400 text-white">see all</button>
          </Link>
         </div>
        </div>
    );
};

export default Food;