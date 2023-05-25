import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

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
      <MenuCategory items={offers}></MenuCategory>

      {/* Desserts */}
      <MenuCategory
        items={deserts}
        bgImg={dessertsImage}
        title={"dessert"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent desserts. Treat yourself today and satisfy your cravings!"
        }
      ></MenuCategory>

      {/* Pizza */}
      <MenuCategory
        items={pizza}
        bgImg={pizzaImage}
        title={"pizza"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent Pizza. Treat yourself today and satisfy your cravings!"
        }
      ></MenuCategory>

      {/* Salads */}
      <MenuCategory
        items={salads}
        bgImg={saladsImage}
        title={"salad"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent Salads. Treat yourself today and satisfy your cravings!"
        }
      ></MenuCategory>

      {/* Soups */}
      <MenuCategory
        items={soups}
        bgImg={soupsImage}
        title={"soup"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent Soups. Treat yourself today and satisfy your cravings!"
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
