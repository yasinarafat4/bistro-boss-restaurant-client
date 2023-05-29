import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, price, name, image, recipe } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        price,
        name,
        image,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire("Good job!", "Food added on the cart", "success");
          }
        });
    } else {
      Swal.fire({
        title: "Please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
            onClick={handleAddToCart}
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
