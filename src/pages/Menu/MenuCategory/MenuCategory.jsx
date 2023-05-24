import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-8 mx-3 md:mx-32 lg:mx-6">
      {items.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default MenuCategory;
