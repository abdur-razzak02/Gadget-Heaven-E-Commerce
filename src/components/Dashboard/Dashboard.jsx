import { Helmet } from "react-helmet";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation().pathname
  
  return (
    <>
      <Helmet><title>Dashboard | Gadget Heaven</title></Helmet>
      <div className="bg-[#9538E2] text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">Dashboard</h1>
          <p className="py-6 px-5 sm:w-2/3 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="space-x-3">
            <Link to={'/dashboard'} className={`${location === '/dashboard' ? 'bg-white text-[#9538E2]' : 'bg-transparent'} py-2 px-10 border rounded-full`}>
              Cart
            </Link>
            <Link to={'/dashboard/wishlist'} className={`${location === '/dashboard' ? 'bg-transparent' : 'bg-white text-[#9538E2]'} py-2 px-10 border rounded-full`}>
              Wishlist
            </Link>
          </div>
        </div>
      </div>
     

      <Outlet></Outlet>
    </>
  );
};

export default Dashboard;
