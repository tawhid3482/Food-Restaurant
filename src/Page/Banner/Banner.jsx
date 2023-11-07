const Banner = () => {
    return (
      <div>
        <div
          className="hero h-[450px]"
          style={{
            backgroundImage:
              "url(https://thumbs.dreamstime.com/b/waitress-serving-food-to-visitors-european-positive-plates-young-couple-table-indoor-48070190.jpg)",
            backgroundSize: "cover", // Add this line to make the image cover the container
          }}
        >
          <div className="hero-overlay bg-opacity-25"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Welcome to Our  <span className="text-orange-300">Restaurant</span>
              </h1>
              <p className="mb-5  text-white">Restaurant management involves overseeing the daily operations of a restaurant, including menu planning, staff management, customer service, and financial control. Managers ensure smooth functioning, great customer experiences, and profitability. </p>
              <button className="btn bg-blue-400   dark:bg-slate-700 dark:text-slate-100 text-white"> all menes</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  