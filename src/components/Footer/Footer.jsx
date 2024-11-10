import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="bg-white mt-20 px-5 lg:px-0">
          <div className="container mx-auto border-b pb-5 pt-12 text-center space-y-2">
              <h1 className="text-2xl font-bold text-black">Gadget Heaven</h1>
              <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
          </div>
      <footer className="footer text-gray-600 p-5 container mx-auto text-center gap-5">
        <nav className="w-full justify-items-center">
          <h6 className="text-xl font-semibold text-black text-center">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a> 
        </nav>
        <nav  className="w-full justify-items-center">
          <h6 className="text-xl font-semibold text-black text-center">Company</h6>
          <Link to={'/about'} className="link link-hover">About Us</Link>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>     
        </nav>
        <nav  className="w-full justify-items-center">
          <h6 className="text-xl font-semibold text-black text-center">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
