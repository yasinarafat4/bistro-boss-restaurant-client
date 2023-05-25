import InsideCover from "../../Shared/InsideCover/InsideCover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, bgImg, text }) => {
  console.log(title);
  return (
    <>
      {title && (
        <InsideCover bgImg={bgImg} title={title} text={text}></InsideCover>
      )}
      <div className="grid lg:grid-cols-2 gap-6 mt-8 mx-3 md:mx-32 lg:mx-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="text-center mb-16 mt-6">
          <button
            className="border border-b-4 border-b-[#1F2937] hover:bg-[#1F2937] hover:duration-500 hover:text-[#BB8506]
          hover:border-b-[#BB8506] p-2 md:px-4 md:py-3 text-xs md:text-sm rounded-lg font-semibold"
          >
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
      </Link>
    </>
  );
};

export default MenuCategory;
