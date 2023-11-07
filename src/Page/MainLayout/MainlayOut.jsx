import {  Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const MainlayOut = () => {
    return (
        <div className="container mx-auto dark:text-gray-100 dark:bg-slate-800 duration-100">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainlayOut;