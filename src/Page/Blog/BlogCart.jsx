
const BlogCart = ({ service }) => {
  const { title, img, currentTime, description, info } = service;
  return (
    <div className="mt-5">
      <div className="card md:w-80 lg:w-96 h-[500px]  bg-base-100 dark:bg-slate-700 dark:text-slate-100 shadow-xl">
        <figure>
          <img src={img} className="" alt="img" />
        </figure>
        <div className="card-body">
          <p className="text-lg text-blue-500">{currentTime}</p>
          <h2 className="card-title">
            {title}
            <div className="badge bg-blue-400 text-white">NEW</div>
          </h2>
          <p className="text-lg">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-3 text-xl">{info}</div>
          </div>
          <div className="text-center mt-1">
            <button className="btn bg-blue-400 text-white">
              Details Coming soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
