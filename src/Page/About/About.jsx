import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage:
            "url(https://my.kulturekonnect.com/hubfs/grand-opening.jpg)",
          backgroundSize: "cover", // Add this line to make the image cover the container
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              About Our Restaurant Staff
            </h1>
            <p className="mb-5  text-white">
              At Pepper, we pride ourselves on crafting exquisite dishes that
              tantalize taste buds and ignite culinary adventures. Our skilled
              chefs meticulously select the finest ingredients, transforming
              them into culinary masterpieces that are as visually stunning as
              they are delectable. From sizzling steaks and fresh seafood to
              vibrant vegetarian delights, our menu is a celebration of diverse
              flavors and global influences.
            </p>
            <Link to="/contact">
              <button className="btn bg-blue-400   dark:bg-slate-700 dark:text-slate-100 text-white">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
