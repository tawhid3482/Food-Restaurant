import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import swal from "sweetalert";
import loginPic from "../../assets/images/login1-removebg-preview.png";
import { Helmet } from "react-helmet";

const Login = () => {
  const { loginByemail, loginGoogle } = UseAuth();
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginByemail(email, password)
      .then((res) => {
        console.log(res.user);
        swal("Good job!", "You login succesfuly", "success");

        navigate("/");

      })
      .catch((error) => {
        console.log(error.message);
        swal("Sorry", "Something wrong", "error");
      });
  };
  const handleloginGoogle = (media) => {
    media();
    navigate("/");
    swal("Good job!", "You login succesfuly", "success");
  };
  return (
    <div>
         <Helmet>
                <title>Pepper-Login</title>
            </Helmet>
      <div className="hero min-h-screen bg-base-200 dark:bg-slate-700 dark:text-slate-100">
        <div className="hero-content  flex-col   lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <img
              src={loginPic}
              className="h-96 md:h-[600px] "
              alt="login img"
            />
          </div>
          <div className="card flex-shrink-0 w-full bg-blue-200 py-2 max-w-sm shadow-2xl dark:bg-slate-700 dark:text-slate-100 dark:border-blue-600 border-2">
            <p className="text-center text-3xl font-bold">Login Now! </p>
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control dark:bg-slate-700 dark:text-slate-100">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered text-black"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-black"
                  name="password"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover dark:bg-slate-700 dark:text-slate-100"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 text-white">Login</button>
              </div>

              <div className="text-center">
                <p>
                  Are you new here?
                  <Link to="/register" className="text-red-500 ml-1">
                     Register !
                  </Link>
                </p>
              </div>
            </form>
            <div className="flex justify-center items-center gap-2">
              <hr className="border- border-gray-300 w-full" />
              <p className="text-2xl font-semibold">Or</p>
              <hr className="border- border-gray-300 w-full" />
            </div>
            <div className="flex justify-center py-2 ">
              <button
                onClick={() => handleloginGoogle(loginGoogle)}
                className="btn"
              >
                <FcGoogle className="text-3xl"></FcGoogle>
                Continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
