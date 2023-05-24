import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

const TodaysOffer = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="my-6">
      <div className="grid lg:grid-cols-2 gap-6 mx-3 md:mx-32 lg:mx-6">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default TodaysOffer;
