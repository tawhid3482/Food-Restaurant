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
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/foodDetails/:_id",
        element: (
          <PrivateProvider>
            <FoodDetails></FoodDetails>
          </PrivateProvider>
        ),
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/FoodServiceDetails/:_id",
        element: (
          <PrivateProvider>
            <FoodServiceDetails></FoodServiceDetails>
          </PrivateProvider>
        ),
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/food",
        element: <FoodService></FoodService>,
        loader: () => fetch("http://localhost:5000/servicesCount"),
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
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/myOrder",
        element: <MyOrder></MyOrder>,
        loader: () => fetch("http://localhost:5000/order"),
      },
      {
        path: "/order/:id",
        element: (
          <PrivateProvider>
            <Order></Order>
          </PrivateProvider> 
        ),
       loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/order/:id",
        element: (
          <PrivateProvider>
            <Order></Order>
          </PrivateProvider> 
        ),
       loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path:'/myFood',
        element:<MyFood></MyFood>,
        loader:()=>fetch('http://localhost:5000/services')
      }
    ],
  },
]);

export default Routes;
