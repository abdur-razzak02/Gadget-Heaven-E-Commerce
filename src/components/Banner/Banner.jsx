import banner from './../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 px-5 translate-y-1/2 lg:px-0 '>
            <img src={banner} alt="banner" className='p-3 border rounded-2xl border-white w-2/3 md:h-[370px] lg:h-[450px] object-fit backdrop:blur-2xl'/>
        </div>
    );
};

export default Banner;