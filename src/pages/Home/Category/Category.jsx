// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import slide images
import slide1 from "../../../assets/home/slide/slide1.jpg";
import slide2 from "../../../assets/home/slide/slide2.jpg";
import slide3 from "../../../assets/home/slide/slide3.jpg";
import slide4 from "../../../assets/home/slide/slide4.jpg";
import slide5 from "../../../assets/home/slide/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3
            className="text-sm md:text-2xl text-center -mt-12 md:-mt-14 text-white shadow-xl uppercase"
            style={{
              fontFamily: "Cinzel, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 20)",
            }}
          >
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />{" "}
          <h3
            className="text-sm md:text-2xl text-center -mt-12 md:-mt-14 text-white shadow-xl uppercase"
            style={{
              fontFamily: "Cinzel, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 20)",
            }}
          >
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3
            className="text-sm md:text-2xl text-center -mt-12 md:-mt-14 text-white shadow-xl uppercase"
            style={{
              fontFamily: "Cinzel, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 20)",
            }}
          >
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3
            className="text-sm md:text-2xl text-center -mt-12 md:-mt-14 text-white shadow-xl uppercase"
            style={{
              fontFamily: "Cinzel, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 20)",
            }}
          >
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3
            className="text-sm md:text-2xl text-center -mt-12 md:-mt-14 text-white shadow-xl uppercase"
            style={{
              fontFamily: "Cinzel, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 20)",
            }}
          >
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
