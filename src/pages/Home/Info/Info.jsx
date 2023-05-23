import infoImg from "../../../assets/home/chef-service.jpg";

const Info = () => {
  return (
    <div
      className="relative flex justify-center items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img src={infoImg} alt="" />
      <div className="absolute text-center px-4 py-2 md:px-5 md:py-3 lg:py-10 lg:px-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
        <h2 className="uppercase text-xs md:text-2xl font-serif">
          Bistro Boss
        </h2>
        <p className="text-[7px] md:text-sm">
          Discover a mouthwatering culinary adventure with us. Indulge in
          tantalizing recipes, expert cooking tips, and vibrant food photography
          that will ignite your appetite and inspire your inner chef.
        </p>
      </div>
    </div>
  );
};

export default Info;
