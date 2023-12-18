import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../Page/MainLayout/MainlayOut";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Home from "../Page/Home/Home";
import Food from "../Page/Food/Food";
import FoodDetails from "../Page/FoodDetails/FoodDetails";
import FoodService from "../Page/FoodService/FoodService";
import AddProduct from "../Page/AddProduct/AddProduct";
import Blog from "../Page/Blog/Blog";
import FoodServiceDetails from "../Page/FoodService/FoodServiceDetails";
import PrivateProvider from "../Page/PrivateProvider/PrivateProvider";
import FoodItemsDetails from "../Page/FoodService/FoodItemsDetails";
import MyOrder from "../Page/MyOrder/MyOrder";
import Order from "../Page/Order/Order";
import MyFood from "../Page/MyFood/MyFood";
import OurMenu from "../Page/OurMenu/OurMenu";
import UpdateFood from "../Page/UpdateFood/UpdateFood";
import Contact from "../Page/Contact/Contact";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/foods",
        element: <Food></Food>,
      },
      {
        path: "/foods/_id",
        element: <Food></Food>,
        loader: () => fetch("https://assingment-11-server-site-iota.vercel.app/services"),
      },
      {
        path: "/foodDetails/:_id",
        element: (
          
            <FoodDetails></FoodDetails>
         
        ),
        loader: () => fetch("https://assingment-11-server-site-iota.vercel.app/services"),
      },
      {
        path: "/FoodServiceDetails/:_id",
        element: (
         
            <FoodServiceDetails></FoodServiceDetails>
          
        ),
        loader: () => fetch("https://assingment-11-server-site-iota.vercel.app/services"),
      },
      {
        path: "/food",
        element: <FoodService></FoodService>,
        loader: () => fetch("https://assingment-11-server-site-iota.vercel.app/servicesCount"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/foodItemsDetails/:_id",
        element: (
          <PrivateProvider>
            <FoodItemsDetails></FoodItemsDetails>
          </PrivateProvider>
        ),
        loader: () => fetch("https://assingment-11-server-site-iota.vercel.app/services"),
      },
      {
        path: "/myOrder",
        element: <PrivateProvider>
          <MyOrder></MyOrder>
        </PrivateProvider>,
        loader: () => fetch("https://assingment-11-server-site-iota.vercel.app/order"),
      },
      {
        path: "/order/:id",
        element: (
          <PrivateProvider>
            <Order></Order>
          </PrivateProvider> 
        ),
       loader:({params})=>fetch(`https://assingment-11-server-site-iota.vercel.app/services/${params.id}`)
      },
      {
        path: "/order/:id",
        element: (
          <PrivateProvider>
            <Order></Order>
          </PrivateProvider> 
        ),
       loader:({params})=>fetch(`https://assingment-11-server-site-iota.vercel.app/service/${params.id}`)
      },
      {
        path:'/myFood',
        element:<MyFood></MyFood>,
        loader:()=>fetch('https://assingment-11-server-site-iota.vercel.app/services')
      },
      {
        path:'/menu',
        element:<OurMenu></OurMenu>,
        loader:()=>fetch('/fake.json')
      },
      {
        path:'/update/:id',
        element:<UpdateFood> </UpdateFood>,
        loader:({params})=>fetch(`https://assingment-11-server-site-iota.vercel.app/services/${params.id}`)
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ],
  },
]);

export default Routes;
