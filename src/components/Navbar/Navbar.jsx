import { FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={'/'}>
      <li>Home</li>
      </NavLink>
      <NavLink to={'/statistics'}>
      <li>Statistics</li>
      </NavLink>
      <NavLink to={'/dashboard'}>
      <li>Dashboard</li>
      </NavLink>
      <NavLink to={'/about'}>
      <li>About Us</li>
      </NavLink>
    </>
  );

  const homeUrl = useLocation().pathname
  return (
    <div className="pt-5 px-5 lg:px-0 relative">
      <div className={`navbar ${homeUrl === '/' ? 'bg-[#9538E2] text-white px-5' : 'bg-gray-100 text-black px-0' } container mx-auto rounded-t-2xl `}>
        <div className="navbar-start flex items-center gap-2 lg:gap-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow text-black space-y-2"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="sm:text-xl font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <NavLink to={'/dashboard'} className="bg-white text-black p-1 sm:p-2 lg:p-3 rounded-full sm:text-lg border">
          <FaCartShopping />
          </NavLink>
          <NavLink to={'/dashboard/wishlist'} className="bg-white text-black p-1 sm:p-2 lg:p-3 rounded-full sm:text-lg border">
          <FaRegHeart />
          </NavLink>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
