import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
              <Helmet>
                <title>Pepper-Error</title>
            </Helmet>
           <div className="flex justify-center items-center ">
           <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg" className="h-[500px]" alt="" />
           </div>
            <div className="text-center mb-5">
                <Link to='/'> 
                <button className="btn bg-green-900 text-white">Back home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;