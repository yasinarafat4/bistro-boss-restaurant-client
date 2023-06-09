import {
  FaBook,
  FaCalendarAlt,
  FaCalendarPlus,
  FaHome,
  FaListUl,
  FaShoppingCart,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { GiHamburgerMenu, GiStarsStack } from "react-icons/gi";
import { SiShopify } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const location = useLocation();
  const isNavLinkActive = (path) => {
    return location.pathname === path ? "activeDash" : "defaultDash";
  };

  // load data from the server to have dynamic isAdmin based on Data
  const [isAdmin] = useAdmin();

  return (
    <>
      <Helmet>
        <title>Bistro | Dashboard</title>
      </Helmet>
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page Content Here */}
            <Outlet></Outlet>
            <label
              style={{ borderBottom: "3px solid #BB8506" }}
              htmlFor="my-drawer-2"
              className="lg:hidden bg-[#E8E8E8] hover:bg-[#1F2937] hover:duration-500 text-[#BB8506] font-semibold py-2 px-4 my-4 rounded-md"
            >
              Dashboard
            </label>
          </div>
          <div className="drawer-side bg-[ #F6F6F6]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul
              className="menu p-4 w-80 bg-[#D1A054] text-base-content font-semibold space-y-5"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              <Link to="/">
                <div className="flex flex-col mb-10">
                  <h2 className="text-2xl font-extrabold">BISTRO BOSS</h2>
                  <p className="text-base tracking-[4px] font-extrabold">
                    RESTAURANT
                  </p>
                </div>
              </Link>
              {/* Dynamic Dashboard Menu here */}
              {isAdmin ? (
                <>
                  {/* Admin's menu start */}
                  <NavLink
                    to="/dashboard/adminHome"
                    className={isNavLinkActive("/dashboard/adminHome")}
                  >
                    <FaHome className="text-2xl" />
                    <li>Admin Home</li>
                  </NavLink>
                  <NavLink
                    to="/dashboard/addItems"
                    className={isNavLinkActive("/dashboard/addItems")}
                  >
                    <ImSpoonKnife className="text-2xl" />
                    <li>Add Items</li>
                  </NavLink>
                  <NavLink
                    to="/dashboard/manageItems"
                    className={isNavLinkActive("/dashboard/manageItems")}
                  >
                    <FaListUl className="text-2xl" />
                    <li>Manage Items</li>
                  </NavLink>
                  <NavLink to="/" className={isNavLinkActive("/")}>
                    <FaBook className="text-2xl" />
                    <li>
                      Manage Bookings <br /> (Not Implemented)
                    </li>
                  </NavLink>
                  <NavLink
                    to="/dashboard/allUsers"
                    className={isNavLinkActive("/dashboard/allUsers")}
                  >
                    <FaUsers className="text-2xl" />
                    <li>All Users</li>
                  </NavLink>
                  {/* Admin's menu end */}
                </>
              ) : (
                <>
                  {/* Users menu start */}
                  <NavLink
                    to="/dashboard/userHome"
                    className={isNavLinkActive("/dashboard/userHome")}
                  >
                    <FaHome className="text-2xl" />
                    <li>User Home</li>
                  </NavLink>
                  <NavLink
                    to="/dashboard/payment"
                    className={isNavLinkActive("/dashboard/payment")}
                  >
                    <FaCalendarAlt className="text-2xl" />
                    <li>Reservation</li>
                  </NavLink>
                  <NavLink to="/" className={isNavLinkActive("/")}>
                    <FaWallet className="text-2xl" />
                    <li>
                      Payment History <br /> (Not Implemented){" "}
                    </li>
                  </NavLink>
                  <NavLink
                    to="/dashboard/myCart"
                    className={isNavLinkActive("/dashboard/myCart")}
                  >
                    <FaShoppingCart className="text-2xl" />
                    <li>My Cart</li>
                    <div className="badge badge-secondary">
                      + {cart?.length || 0}
                    </div>
                  </NavLink>
                  <NavLink to="/" className={isNavLinkActive("/")}>
                    <GiStarsStack className="text-2xl" />
                    <li>
                      Add Review <br /> (Not Implemented)
                    </li>
                  </NavLink>
                  <NavLink to="/" className={isNavLinkActive("/")}>
                    <FaCalendarPlus className="text-2xl" />
                    <li>
                      My Booking <br /> (Not Implemented)
                    </li>
                  </NavLink>
                  {/* Users menu end */}
                </>
              )}

              <div
                style={{
                  backgroundColor: "white",
                  height: "1px",
                  marginTop: "40px",
                  marginBottom: "20px",
                }}
                className="divider"
              ></div>

              {/* Main menu start */}
              <NavLink to="/" className={isNavLinkActive("/")}>
                <FaHome className="text-2xl" />
                <li>Home</li>
              </NavLink>
              <NavLink to="/menu" className={isNavLinkActive("/menu")}>
                <GiHamburgerMenu className="text-2xl" />
                <li>Menu</li>
              </NavLink>
              <NavLink
                to="/order/desert"
                className={isNavLinkActive("/order/desert")}
              >
                <SiShopify className="text-2xl" />
                <li>Shop</li>
              </NavLink>
              <NavLink to="/" className={isNavLinkActive("/")}>
                <HiMail className="text-2xl" />
                <li>Contact</li>
              </NavLink>
              {/* Main menu end */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
