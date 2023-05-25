const FoodCard = ({ item }) => {
  const { price, name, image, recipe } = item;
  return (
    <div
      className="card w-11/12 bg-[#F3F3F3] shadow-xl my-3 md:my-8 mx-auto"
      data-aos="fade-down-left"
      data-aos-duration="1000"
    >
      <figure>
        <img src={image} alt="Items" className="rounded w-full" />
      </figure>
      <p className="absolute bg-slate-900 text-white right-0 mt-4 mr-4 px-3 py-2 lg:px-2 lg:py-1 rounded">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            style={{ borderBottom: "3px solid #BB8506" }}
            className="bg-[#E8E8E8] hover:bg-[#1F2937] hover:duration-500 text-[#BB8506] font-semibold py-2 px-4 rounded-md"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
