import { useLoaderData } from "react-router-dom";
import OurMenuCard from "./OurMenuCard";

const OurMenu = () => {
    const data = useLoaderData()

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                data?.map((menu)=><OurMenuCard key={menu.id} menu={menu}></OurMenuCard>)
            }
        </div>
    );
};

export default OurMenu;