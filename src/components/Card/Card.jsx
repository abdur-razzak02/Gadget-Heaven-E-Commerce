import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const {
    product_id,
    product_title,
    product_image,
    price
  } = card;

  return (
    <div className="card bg-base-100 shadow-md mt-0 pt-0">
      <figure className="px-5 pt-5 w-full">
        <img
          src={product_image}
          alt="product"
          className="rounded-xl bg-gray-100 border h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-2xl">{product_title}</h2>
        <p className="text-lg pb-2">Price: {price} $</p>
        <div className="card-actions">
          <Link to={`/details/${product_id}`}>
            <button className="border rounded-md py-2 px-4 border-[#9538E2] hover:bg-[#9538E2] hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    card: PropTypes.object
}
export default Card;
