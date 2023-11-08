
const OurMenuCard = ({menu}) => {
    const {img,name}=menu
    return (
        <div>
            <div className="flex flex-col items-center">
                <img src={img} className="w-52 h-52" alt="" />
                <p className="text-xl font-bold">{name}</p>
            </div>
        </div>
    );
};

export default OurMenuCard;