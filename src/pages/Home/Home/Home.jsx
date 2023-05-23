import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import Info from "../Info/Info";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Info></Info>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecommends></ChefRecommends>
      <FeaturedMenu></FeaturedMenu>
    </div>
  );
};

export default Home;
