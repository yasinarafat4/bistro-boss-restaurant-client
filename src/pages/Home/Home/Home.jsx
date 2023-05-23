import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
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
    </div>
  );
};

export default Home;
