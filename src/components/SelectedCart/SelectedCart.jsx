import { getStoredCartList } from "../Utility/Utility";
import { useLoaderData, useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { FaSort } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import successImage from './../../assets/success.png'

const SelectedCart = () => {
  const allcards = useLoaderData();
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [storedProduct, setStoredProduct] = useState([]);


  useEffect(() => {
    const storedCartList = getStoredCartList();
    setStoredProduct(storedCartList);
  }, []);

  // remove single item
  const hadleRemoveItem = (id) => {
    const remaining = storedProduct.filter((item) => Number(item) !== id);
    localStorage.setItem("cart-list", JSON.stringify(remaining));
    setStoredProduct(remaining);
  };

  // delete all form cart as purchased
  const handlePurchase = () => {
    if (products.length === 0) {
      toast.error("No Item Found");
      return;
    }
    document.getElementById("purchaseModal").showModal()
    localStorage.removeItem("cart-list");
    setStoredProduct([]);
  };

  useEffect(() => {
    const productsShow = allcards?.filter((product) =>
      storedProduct?.includes(product.product_id.toString())
    );
    setProducts(productsShow);
  }, [allcards, storedProduct]);

  // total ammount
  useEffect(() => {
    const sum = products?.reduce((acc, product) => acc + product.price, 0);
    setTotal(sum);
  }, [products]);

  // sort by price
  const handleSortByPrice = () => {
    const sortedPrice = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedPrice);
  };

  // navigate to home
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div className="container mx-auto px-5 xl:px-0">
      <div className="sm:flex justify-between items-center py-5 sm:py-8">
        <h1 className="font-bold text-2xl hidden sm:flex">Cart</h1>
        <div className="flex gap-2 sm:gap-5 items-center justify-between">
          <h1 className="font-bold text-[14px] sm:text-2xl">
            Total Cost: {total?.toFixed(2)} $
          </h1>
          <div className="flex gap-2">
          <button
            onClick={() => handleSortByPrice()}
            className="border rounded-full border-purple-700 py-1 sm:py-2 px-2 sm:px-4 font-semibold flex items-center gap-2 text-[12px] sm:text-base"
          >
            Sort By Price <FaSort />
          </button>
          <button
            onClick={() => handlePurchase()}
            className="rounded-full bg-[#9538E2]  py-1 sm:py-2 px-2 sm:px-4 text-[12px] sm:text-base text-white font-semibold disabled"
          >
            Purchase
          </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="purchaseModal" className="modal modal-bottom sm:modal-middle px-5">
        <div className="modal-box text-center justify-items-center">
          <img src={successImage} alt="successImage" />
          <h3 className="font-bold text-3xl mt-5">Payment Successful</h3>
          <p className="py-3 text-gray-500 font-semibold">
            Thanks for purchasing
          </p>
          {/* <p className="text-gray-500 font-semibold">Total: { total?.toFixed(2)} $</p> */}
          <div className="modal-action">
            <form method="dialog">
              <button onClick={()=>navigateToHome()} className="btn bg-[#9538E2] text-white hover:bg-[#a44aed] w-40">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div>
        {products?.map((product) => (
          <div
            key={product.product_id}
            className="flex gap-2 sm:gap-5 items-center mb-5 bg-white p-2 sm:p-5 rounded-xl"
          >
            <div>
              <img
                src={product.product_image}
                alt="product image"
                className="h-20 sm:h-28 w-28 sm:w-36 border rounded-xl"
              />
            </div>
            <div className="flex justify-between items-center w-full ">
              <div className="sm:space-y-2">
                <h1 className="font-semibold sm:text-2xl">
                  {product.product_title}
                </h1>
                <h1 className="text-gray-500 text-[12px] sm:text-base">{product.description}</h1>
                <h1 className="font-semibold text-[13px] sm:text-xl">
                  Price: {product.price}$
                </h1>
              </div>
              <div className="px-0 sm:px-10 flex justify-center items-center">
                <button
                  onClick={() => hadleRemoveItem(product.product_id)}
                  className="text-4xl sm:text-5xl text-red-600"
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedCart;
