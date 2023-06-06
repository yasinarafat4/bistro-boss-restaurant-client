import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import DashTitle from "../../../components/DashTitle/DashTitle";
import "./AllUsers.css";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleDelete = (user) => {
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
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  console.log(users);
  return (
    <div className="w-10/12 overflow-y-auto">
      <Helmet>
        <title>Bistro | All Users</title>
      </Helmet>
      <DashTitle
        subHeading={"---How many??---"}
        heading={"MANAGE ALL USERS"}
      ></DashTitle>
      <h2
        style={{ fontFamily: "Cinzel, serif" }}
        className="text-2xl font-bold"
      >
        Total Users: {users.length}
      </h2>
      <div className="font-bold flex justify-evenly items-center mb-4">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#D1A054] text-white">#</th>
                <th className="bg-[#D1A054] text-white">Name</th>
                <th className="bg-[#D1A054] text-white">Email</th>
                <th className="bg-[#D1A054] text-white">Role</th>
                <th className="bg-[#D1A054] text-white">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <p className="text-green-600">Admin</p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className=" p-2 text-white bg-[#D1A054] border-none rounded"
                      >
                        {" "}
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
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
    </div>
  );
};

export default AllUsers;
