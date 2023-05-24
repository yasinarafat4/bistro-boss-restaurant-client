import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import Info from "../Info/Info";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Info></Info>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecommends></ChefRecommends>
      <FeaturedMenu></FeaturedMenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
