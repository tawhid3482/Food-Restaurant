import { Link } from 'react-router-dom';
import del from '../../assets/images/delivery-service-with-masks-concept_23-2148509518.avif'
const Delivery = () => {
  return (
    <div className='m-5  w-full mx-auto'>
        <p className='text-center text-2xl font-bold mt-8'>Delivery Services</p>
      <div className="card lg:card-side bg-base-100 shadow-xl dark:bg-slate-700 dark:text-slate-100 p-5">
        <figure className='lg:w-3/5'>
          <img
            src={del}
            className='lg:w-4/5'
            alt="delivery boy"
          />
        </figure>
        <div className="card-body lg:w-2/5">
          <h2 className="card-title">Delivery services have become an integral part of modern living, offering convenience, efficiency, and ease to consumers.</h2>

          <p>Delivery services bring the world to your doorstep. Whether you're craving a delicious meal from your favorite restaurant, need groceries for the week, or ordered a new gadget online, delivery services ensure that what you need is conveniently delivered right to your home or office.</p>

          <div className="card-actions justify-center">
            <Link>
            <button className="btn bg-blue-400 text-white">more details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
