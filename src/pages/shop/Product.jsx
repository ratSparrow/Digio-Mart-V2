/* eslint-disable react/prop-types */
import {
  faDollarSign,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { addToDb } from "../../helpers/storage";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const Product = ({ product }) => {
  const { _id, name, img, seller, price, stock, star } = product;
  // console.log(product.category);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    addToDb(product._id);
    toast.success("Added Product to the cart");
  };
  // console.log(product);

  const cartIcon = (
    <FontAwesomeIcon className="text-sm mr-2" icon={faShoppingCart} />
  );
  const dollarSign = <FontAwesomeIcon icon={faDollarSign} />;
  return (
    <main className="mx-2 rounded hover:border hover:border-orange-400">
      <section className=" items-center justify-around">
        <section className="mr-8">
          <figure>
            <img className="rounded h-40 w-full" src={img} alt="" />
          </figure>
        </section>

        <section>
          <h5 className="text-md font-semibold text-yellow-600" title={name}>
            {name.slice(0, 30)}..
          </h5>
          <h2 className="my-1">
            <small>
              Seller by{" "}
              <span className="text-red-600 font-semibold">{seller}</span>
            </small>
          </h2>
          <h2>
            <span className="text-[#0C436C] mr-1">{dollarSign}</span>
            <span>{price}</span>
          </h2>
          <h2 className="text-lg text-red-600 font-semibold">
            {" "}
            <small>available {stock} in stock </small>
          </h2>
          <Rating
            className="text-orange-400 mt-1"
            initialRating={star}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          />

          <br />
          <button
            className="w-full border rounded-lg bg-gray-300 text-red-600 hover:bg-red-700 font-semibold font-serif hover:text-white p-1 mt-4"
            onClick={() => handleAddToCart(product)}
          >
            {cartIcon} Add
          </button>
          <Link to={`/inventory/details/${_id}`}>
            {" "}
            <button className="w-full border rounded-lg bg-gray-300 text-teal-600 hover:bg-teal-700 my-2 font-semibold font-serif hover:text-white p-1 mt-4">
              Show Details
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
};

export default Product;
