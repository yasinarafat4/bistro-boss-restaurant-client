import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-16">
      <SectionTitle
        subHeading={"---Popular Items---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-6 mx-3 md:mx-32 lg:mx-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-6">
        <button
          style={{
            padding: "15px 25px 15px 25px",
            borderBottom: "3px solid #1F2937",
            borderRadius: "8px",
          }}
          className="border"
        >
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
