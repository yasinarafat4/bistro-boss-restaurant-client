import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      {/* <SwiperSlide>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
         
        </div>
      </SwiperSlide> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </Swiper>
  );
};

export default OrderTab;
