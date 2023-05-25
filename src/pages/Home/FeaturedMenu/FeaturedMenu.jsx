import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./FeaturedMenu.css";

const FeaturedMenu = () => {
  return (
    <div className="featured-item bg-fixed text-white py-4 lg:py-6 mb-16 ">
      <SectionTitle
        subHeading={"---Check it Out---"}
        heading={"FEATURED ITEM"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-2 px-4 lg:py-8 lg:px-16 gap-10">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="mt-4 lg:mt-0">
          <h3 style={{ color: "#FFFFFF" }}>March 20, 2023</h3>
          <h3>WHERE CAN I GET SOME?</h3>
          <p className="text-xs lg:text-sm my-3">
            Discover a culinary paradise at Taste Haven our renowned restaurant.
            Immerse yourself in a symphony of flavors, where innovative dishes
            meet traditional favorites. From farm-to-table delicacies to exotic
            international fare, our passionate chefs curate a gastronomic
            experience that will tantalize your senses. Embark on a remarkable
            culinary adventure at Taste Haven today.
          </p>
          <div className="my-6 lg:mt-6">
            <button
              style={{ borderBottom: "3px solid #FFFFFF" }}
              className=" hover:bg-[#1F2937] hover:duration-500 hover:text-[#BB8506] font-semibold py-2 px-4 rounded-md"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
