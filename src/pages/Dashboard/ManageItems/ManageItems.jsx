import { Helmet } from "react-helmet-async";
import DashTitle from "../../../components/DashTitle/DashTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();
  return (
    <div className="w-10/12 overflow-auto">
      <Helmet>
        <title>Bistro | Manage Items</title>
      </Helmet>
      <DashTitle
        subHeading={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}
      ></DashTitle>

      <h2 className="text-xs md:text-xl mb-2 font-bold">
        Total Items: {menu.length}{" "}
      </h2>

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
              <th className="bg-[#D1A054] text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
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
                  <button className=" p-2 text-white bg-[#D1A054] border-none rounded">
                    {" "}
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button className=" p-2 text-white bg-[#B91C1C] border-none rounded">
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

export default ManageItems;
