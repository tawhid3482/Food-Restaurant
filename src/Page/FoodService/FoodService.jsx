import { useEffect, useState } from "react";
import FoodServiceItem from "./FoodServiceItem";
import { useLoaderData } from "react-router-dom";
import logo from "../../assets/images/download-removebg-preview.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Helmet } from "react-helmet";

const FoodService = () => {
  const [item, setFoods] = useState();

  const { count } = useLoaderData();
  const [itemsPage, setItemPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const numberofPage = Math.ceil(count / itemsPage);
  const pages = [...Array(numberofPage).keys()];
  useEffect(() => {
    fetch(
      `https://assingment-11-server-site-iota.vercel.app/services?page=${currentPage}&size=${itemsPage}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [currentPage, itemsPage]);

  const handleItemPages = (e) => {
    const val = parseInt(e.target.value);
    setItemPage(val);
    setCurrentPage(0);
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // search

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCards, setFilterCards] = useState(item);

  const handleSearch = () => {
    const filteredCard = item?.filter((card) =>
      card.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilterCards(filteredCard);
  };

  return (
    <div className="">
        <Helmet>
                <title>Pepper-Food Items</title>
            </Helmet>
      <div className="flex items-center justify-center bg-gray-300 p-3  dark:bg-slate-700 dark:text-slate-100">
        <img src={logo} className="w-24 h-12 mr-2 md:w-40 md:h-20 md:mr-10" alt="" />
        <input
          value={searchQuery}
          type="text"
          placeholder="Search here...."
          className="border-2 border-black w-full md:w-3/5 text-black p-3 rounded-md input-bordered  "
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="indicator">
          <button
            onClick={handleSearch}
            className="p-3 w-28 rounded-md bg-[#FF444A] text-white"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {<FoodServiceItem item={item} filterCards={filterCards}></FoodServiceItem>}
      </div>

      <div className="text-center mb-5 ">
        <button
          className="btn btn-sm hover:bg-blue-400 hover:text-white"
          onClick={handlePrevious}
        >
          <AiOutlineArrowLeft />
        </button>
        {pages?.map((page) => (
          <button
            className={`btn btn-sm ml-2 ${
              currentPage === page ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          className="btn btn-sm ml-2 hover:bg-blue-400 hover:text-white"
          onClick={handleNext}
        >
          <AiOutlineArrowRight />
        </button>

        <select
          value={itemsPage}
          className="btn btn-sm ml-3"
          onChange={handleItemPages}
          name=""
          id=""
        >
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default FoodService;
