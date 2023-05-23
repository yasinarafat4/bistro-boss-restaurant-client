const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <>
      {" "}
      <div className="flex space-x-4">
        <img
          className="w-[110px] bg-[#D9D9D9] border"
          src={image}
          style={{ borderRadius: "0 200px 200px 200px" }}
          alt=""
        />
        <div>
          <h3
            className="text-xs md:text-lg uppercase"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            {name} ------------------
          </h3>
          <p className="text-[12px] md:text-sm">{recipe}</p>
        </div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    </>
  );
};

export default MenuItem;
