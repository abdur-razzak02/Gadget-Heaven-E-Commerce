import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="bg-white p-5 sm:p-10 sm:w-2/3 sm:mx-auto sm:my-10 rounded-xl mx-5 ">
      <Helmet>
        <title>About | Gadget Heaven</title>
      </Helmet>
      <h1 className="text-4xl text-center font-bold mb-5 text-[#9538E2]">
        Gadget Heaven
      </h1>
      <p className="text-lg mb-3 font-thin ">
        {" "}
        Discover the latest in cutting-edge technology at <b>Gadget Heaven</b>!
        We bring you the best in smartphones, laptops, wearables, and smart home
        devices, curated for quality and innovation. Whether you are a tech
        enthusiast, gamer, or looking to upgrade your home with the latest
        gadgets, our store has everything you need. With a focus on customer
        satisfaction, competitive pricing, and expert support,{" "}
        <b>Gadget Heaven</b> is your go-to destination for all things tech.
        Explore, compare, and find the perfect device to suit your lifestyle!
      </p>
      <h2 className="font-medium">
        Location: 132/5 Finlay Square <br /> Nasirabad, Chittagong
      </h2>
      <h3 className=" font-medium">Contact: +88 01645 995231</h3>

      <div className="">
        <div className="card-body px-0 space-y-3">
          <input placeholder="Email" className="input input-bordered" />

          <textarea
            name="Message"
            id=""
            className="border p-5 rounded-md"
            placeholder="Your Message"
          ></textarea>
          <label className="label cursor-pointer">
            Submit to newsletter
            <input type="checkbox" className="toggle" />
          </label>
          <button className="btn bg-[#9538E2] text-white hover:text-black w-40 mx-auto">Send</button>
        </div>
      </div>
    </div>
  );
};

export default About;
