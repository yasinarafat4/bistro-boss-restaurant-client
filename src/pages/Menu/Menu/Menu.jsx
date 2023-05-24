import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import OrderButton from "../../Shared/OrderButton/OrderButton";
import InsideCover from "../../Shared/InsideCover/InsideCover";

// Cover Images
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertsImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladsImage from "../../../assets/menu/salad-bg.jpg";
import soupsImage from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offers = menu.filter((item) => item.category === "offered");
  const deserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        bgImg={menuImg}
        title={"OUR MENU"}
        text={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={"---Don't Miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>

      {/*Todays Offer */}
      <MenuCategory items={offers}></MenuCategory>
      <OrderButton></OrderButton>

      {/* Desserts */}
      <InsideCover
        bgImg={dessertsImage}
        title={"Desserts"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent desserts. Treat yourself today and satisfy your cravings!"
        }
      ></InsideCover>
      <MenuCategory items={deserts}></MenuCategory>
      <OrderButton></OrderButton>

      {/* Pizza */}
      <InsideCover
        bgImg={pizzaImage}
        title={"Pizza"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent Pizza. Treat yourself today and satisfy your cravings!"
        }
      ></InsideCover>
      <MenuCategory items={pizza}></MenuCategory>
      <OrderButton></OrderButton>

      {/* Salads */}
      <InsideCover
        bgImg={saladsImage}
        title={"Salads"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent Salads. Treat yourself today and satisfy your cravings!"
        }
      ></InsideCover>
      <MenuCategory items={salads}></MenuCategory>
      <OrderButton></OrderButton>

      {/* Soups */}
      <InsideCover
        bgImg={soupsImage}
        title={"Soups"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent Soups. Treat yourself today and satisfy your cravings!"
        }
      ></InsideCover>
      <MenuCategory items={soups}></MenuCategory>
      <OrderButton></OrderButton>
    </div>
  );
};

export default Menu;
