import { Outlet,  useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HeroTexts from "../HeroTexts/HeroTexts";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";


const Root = () => {
    const location = useLocation().pathname; 
    
    return (
        <div className="bg-gray-100">
            <Helmet><title>Gadget Heaven | Home</title></Helmet>
            {location === '/' ? 
                <div className="relative">
            <Navbar></Navbar> 
            <HeroTexts></HeroTexts>
            <Banner></Banner>
                </div>
            : <Navbar></Navbar>}
            <div className="min-h-[calc(100vh-480px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer
                position="top-center"
                autoClose={2000}/>
        </div>
    );
};

export default Root;