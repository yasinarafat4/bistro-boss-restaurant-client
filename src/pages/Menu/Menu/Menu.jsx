import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import TodaysOffer from "../../Shared/TodaysOffer/TodaysOffer";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InsideCover from "../../Shared/InsideCover/InsideCover";

// Cover Images
import menuImg from "../../../assets/menu/banner3.jpg";
import insideCoverImg from "../../../assets/home/chef-service.jpg";
import OrderButton from "../../Shared/OrderButton/OrderButton";

const Menu = () => {
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
      <TodaysOffer></TodaysOffer>
      <OrderButton></OrderButton>
      <InsideCover
        bgImg={insideCoverImg}
        title={"Desserts"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent desserts. Treat yourself today and satisfy your cravings!"
        }
      ></InsideCover>
      <TodaysOffer></TodaysOffer>
      <TodaysOffer></TodaysOffer>
      <OrderButton></OrderButton>
      <InsideCover
        bgImg={insideCoverImg}
        title={"Pizza"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent Pizza. Treat yourself today and satisfy your cravings!"
        }
      ></InsideCover>
      <TodaysOffer></TodaysOffer>
      <TodaysOffer></TodaysOffer>
      <TodaysOffer></TodaysOffer>
      <OrderButton></OrderButton>
      <InsideCover
        bgImg={insideCoverImg}
        title={"Salads"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent Salads. Treat yourself today and satisfy your cravings!"
        }
      ></InsideCover>
      <TodaysOffer></TodaysOffer>
      <TodaysOffer></TodaysOffer>
      <OrderButton></OrderButton>
      <InsideCover
        bgImg={insideCoverImg}
        title={"Soups"}
        text={
          "Indulge in a heavenly symphony of flavors with our decadent Soups. Treat yourself today and satisfy your cravings!"
        }
      ></InsideCover>
      <TodaysOffer></TodaysOffer>
      <TodaysOffer></TodaysOffer>
      <OrderButton></OrderButton>
    </div>
  );
};

export default Menu;
