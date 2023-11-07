import { Helmet } from "react-helmet";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Delivery from "../Delivery/Delivery";
import Food from "../Food/Food";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Pepper-Home</title>
            </Helmet>
            <Banner></Banner>
            <Food></Food>
            <Delivery></Delivery>
            <About></About>
        </div>
    );
};

export default Home;