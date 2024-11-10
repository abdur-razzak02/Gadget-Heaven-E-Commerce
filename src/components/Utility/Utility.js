import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredCartList = (id,availability) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        toast.warning('Already Exist in Cart!')
        return
    }
    if (availability === false) {
        toast.error('Out of Stock!')
        return
    }

    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        toast.success('Added to your cart')
    }
}

const getStoredFavouriteList = () => {
    const storedListStr = localStorage.getItem('favourite-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredFavouriteList = (id) => {
    const storedList = getStoredFavouriteList();
    if (storedList.includes(id)) {
        // toast.warning('Already Exist in Wishlist');
        const wishlistBtn = document.getElementById('wishlistBtn')
        wishlistBtn.classList.add('disabled')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('favourite-list', storedListStr);
        toast.success('Added to your Wishlist')
        
    }
}

export { addToStoredCartList, getStoredCartList, addToStoredFavouriteList, getStoredFavouriteList }