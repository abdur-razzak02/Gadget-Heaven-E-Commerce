import { addToStoredCartList, getStoredCartList } from "../Utility/Utility";
import { useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Wishlist = () => {
  const allcards = useLoaderData();
  const [storedProduct, setStoredProduct] = useState([])  

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('favourite-list')) || [];
    setStoredProduct(cartItems);
  },[])

  const products = allcards?.filter((product) =>
    storedProduct?.includes(product.product_id.toString())
    );
    
  // add to cart
  const cartlist = getStoredCartList()  
  const handelAddToCart = (id, product) => {
    if (!product.availability) {
      toast.warning('Out of Stock!');
      return
    }
    const idStr = id.toString()
    if (cartlist.includes(idStr)) {
      toast.warning('This item is already in the cart!');
      return
    }
    addToStoredCartList(idStr)
    hadleRemoveItem(id)
  }
  
  const hadleRemoveItem = (id) => {
    const remaining = storedProduct.filter(item => Number(item) !== id);
    localStorage.setItem('favourite-list', JSON.stringify(remaining));
    setStoredProduct(remaining)
  }

  return (
    <div className="container mx-auto px-5 xl:px-0">
      <div className="flex justify-between items-center py-5 sm:py-8">
        <h1 className="font-bold text-xl sm:text-2xl">Wishlist</h1>
      </div>
      <div>
        {products.map((product) => (
          <div
            key={product.product_id}
            className="flex gap-3 sm:gap-5 items-center mb-5 bg-white p-3 sm:p-5 rounded-xl"
            >
                <div>
                <img
                  src={product.product_image}
                  alt="product image"
                  className="h-24 sm:h-40 w-28 sm:w-52 border rounded-xl"
                />
              </div>
                <div className="flex justify-between items-center w-full gap-1">
                <div className="sm:space-y-2">
              <h1 className="font-semibold sm:text-2xl">{product.product_title}</h1>
              <h1 className="text-gray-500 text-[12px] sm:text-base">{product.description}</h1>
                        <h1 className="font-semibold text-[12px] sm:text-xl">Price: {product.price}$</h1>
              <button onClick={()=>handelAddToCart(product.product_id,product)} className="bg-[#9538E2] py-1 sm:py-2 px-3 sm:px-5 rounded-full border text-white flex items-center gap-2 text-[12px] sm:text-base">
                <span>Add to Cart</span> <span><FaShoppingCart /></span>
            </button>
            </div>
            <div className="px-0 sm:px-10 flex justify-center items-center">
              <button onClick={()=>hadleRemoveItem(product.product_id)} className="text-4xl sm:text-5xl text-red-600"><TiDeleteOutline /></button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
