import { useLoaderData } from "react-router-dom";
import BlogCart from "./BlogCart";
import { Helmet } from "react-helmet";

const Blog = () => {
  const data = useLoaderData();
  return (
    <div className="m-10">
        <Helmet>
                <title>Pepper-Blog</title>
            </Helmet>
      <div className="w-full md:w-3/5 mx-auto space-y-3">
        <h3 className="text-center text-4xl font-bold">
          {" "}
          Our Restaurant <span className="text-blue-400">Blog</span>
        </h3>
        <p className="text-center text-lg">
          Never miss a delicious update! Subscribe to our newsletter to receive
          the latest blog posts, exclusive recipes, special offers, and event
          invitations directly to your inbox.
        </p>
        <hr className="border border-blue-500 w-60 mx-auto " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((service) => (
          <BlogCart key={service.title} service={service}></BlogCart>
        ))}
      </div>
      <div className="md:w-4/5 mx-auto m-8">
        <div className="m-5">
        <p className="text-2xl font-semibold text-center">What is One way data binding?</p>
        <p className="text-lg text-center"><span className="text-blue-400"> Ans:</span> One-way data binding is a concept in software development, particularly in frameworks like React and Angular, where the data flow is unidirectional. It means that the data is only transferred from the data source (typically the component state or a parent component) to the UI elements (like HTML elements) and not the other way around. Changes in the data source reflect in the UI, but changes in the UI do not affect the data source directly.</p>
        </div>
        <div className="m-5">
        <p className="text-2xl font-semibold text-center">What is NPM in node.js?</p>
        <p className="text-lg text-center"><span className="text-blue-400"> Ans:</span> NPM stands for Node Package Manager. It is the default package manager for Node.js, a JavaScript runtime environment. NPM allows developers to easily manage and share packages (libraries and tools) of JavaScript code. These packages can be used to extend the functionality of a Node.js application.</p>
        </div>
        <div className="m-5">
        <p className="text-2xl font-semibold text-center">Different between Mongodb database vs mySQL database ?</p>
        <p className="text-lg text-center"><span className="text-blue-400"> Ans:</span> MongoDB and MySQL are both popular database management systems, but they belong to different categories: MongoDB is a NoSQL database, whereas MySQL is a relational database.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
