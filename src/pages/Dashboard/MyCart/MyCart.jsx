import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import DashTitle from "../../../components/DashTitle/DashTitle";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();

  // using array reduce to sum
  const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://bistro-boss-server-self-eta.vercel.app/carts/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-10/12 overflow-y-auto">
      <Helmet>
        <title>Bistro | My Cart</title>
      </Helmet>
      <DashTitle
        subHeading={"---My Cart---"}
        heading={"WANNA ADD MORE?"}
      ></DashTitle>
      <div className="font-bold uppercase flex justify-evenly items-center mb-4">
        <div className="space-y-3 md:space-y-0 md:flex gap-10">
          <h2 className="text-xs md:text-xl">Total Orders: {cart.length}</h2>
          <h2 className="text-xs md:text-xl">Total Price: {total}</h2>
        </div>
        <Link to="/dashboard/payment">
          <button className="px-4 py-3 bg-[#D1A054] text-white border-none rounded-lg">
            Pay
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th className="bg-[#D1A054] text-white">#</th>
              <th className="bg-[#D1A054] text-white">Item Image</th>
              <th className="bg-[#D1A054] text-white">Item Name</th>
              <th className="bg-[#D1A054] text-white">Price</th>
              <th className="bg-[#D1A054] text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className=" p-2 text-white bg-[#B91C1C] border-none rounded"
                  >
                    {" "}
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
