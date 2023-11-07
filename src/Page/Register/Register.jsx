import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import { FcGoogle } from 'react-icons/fc';
import swal from "sweetalert";
import loginPic from "../../assets/images/login1-removebg-preview.png";
import { Helmet } from "react-helmet";


const Register = () => {
  const { createUserEmail,loginGoogle ,userUpdate} = UseAuth();

  const navigate = useNavigate();

  const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (password.length < 6) {
      swal("Sorry", "your password must be 6 charecter", "error");
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal("Sorry", "your password must be one UpperCase letter", "error");
      return;
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
      swal(
        "Sorry",
        "Your password must contain at least one special character",
        "error"
      );
      return;
    }
    createUserEmail(email,password)
      .then((res) => {
        console.log(res.user);
        userUpdate(name, photo)
        .then(() => {
          swal("Successfully", "Account created successfully", "success");
          
          navigate("/");

            setTimeout(() => {
                window.location.reload();  
            }, 2*1000);
        //  form.reset()
        });
      })
      .catch((error) => {
        console.log(error.message);
        swal("Sorry", "Something wrong", "error");
        form.reset()

      });

  }
  const handleloginGoogle =(media)=>{
    media()
    navigate("/")
    swal("Good job!", "You login succesfuly", "success");  
  }
  return (
    <div>
      <Helmet>
                <title>Pepper-Registration</title>
            </Helmet>
      <div className="hero min-h-screen bg-base-200 dark:bg-slate-700 dark:text-slate-100">
        <div className="hero-content  flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <img  src={loginPic} className="h-[600px]" alt="login img" />

          </div>
          <div className="card flex-shrink-0 w-full bg-blue-200  py-5 max-w-sm shadow-2xl  dark:bg-slate-700 dark:text-slate-100 dark:border-blue-600 border-2">
            <p className="text-center text-3xl font-bold"> Registration Now! </p>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control dark:bg-slate-700 dark:text-slate-100">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered  text-black"
                  name="name"
                  required
                />
              </div>
              <div className="form-control dark:bg-slate-700 dark:text-slate-100">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo"
                  className="input input-bordered  text-black"
                  name="photo"
                  required
                />
              </div>
              <div className="form-control dark:bg-slate-700 dark:text-slate-100">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered  text-black"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered  text-black"
                  name="password"
                  required
                />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 text-white">register</button>
              </div>

              <div className="text-center">
                <p>Are you new here?  <Link to='/login' className="text-red-500 ml-1"> Login !</Link></p>
              </div>
            </form>
            <div className="flex justify-center items-center gap-2">
              <hr  className="border- border-gray-300 w-full" />
              <p className="text-2xl font-semibold">Or</p>
              <hr  className="border- border-gray-300 w-full" />

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

export default Register;
