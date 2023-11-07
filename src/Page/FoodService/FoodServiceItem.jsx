import FoodServiceDetails from "./FoodServiceDetails";

const FoodServiceItem = ({ item, filterCards }) => {


  return (
    <div className="m-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:w-[700px]  lg:w-[1250px] mx-auto ">
        {filterCards?.length > 0 ? (
          filterCards.map((items) => (
            <FoodServiceDetails key={items.id} items={items} />
          ))
        ) : (
          <div></div>
        )}
      </div>
      {item?.length > 0 && (
                <div className={`mt-10 ${filterCards? 'hidden':''}`} >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[700px] gap-3  lg:w-[1250px] mx-auto">
                        {item?.map(items => (
                            <FoodServiceDetails key={items.id} items={items} />
                        ))}
                    </div>
                </div>
            )}
    </div>
  );
};

export default FoodServiceItem;

