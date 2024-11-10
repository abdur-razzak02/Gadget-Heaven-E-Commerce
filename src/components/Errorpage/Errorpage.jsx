import errorImage from './../../assets/page-not-found.png'

// import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  // const error = useRouteError()
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <img src={errorImage} alt="error-image" className='w-full object-cover min-h-screen fixed'/>
      {/* <h1>Oops1</h1> */}
      {/* <P>{ error}</P> */}
    </div>
  );
};

export default Errorpage;
