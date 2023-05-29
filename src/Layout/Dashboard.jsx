import {
  FaCalendarAlt,
  FaCalendarPlus,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { GiHamburgerMenu, GiStarsStack } from "react-icons/gi";
import { SiShopify } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const isNavLinkActive = (path) => {
    return location.pathname === path ? "activeDash" : "defaultDash";
  };

  return (
    <div style={{ fontFamily: "Cinzel, serif" }}>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page Content Here */}
          <Outlet></Outlet>
          <label
            style={{ borderBottom: "3px solid #BB8506" }}
            htmlFor="my-drawer-2"
            className="lg:hidden bg-[#E8E8E8] hover:bg-[#1F2937] hover:duration-500 text-[#BB8506] font-semibold py-2 px-4 rounded-md"
          >
            Dashboard
          </label>
        </div>
        <div className="drawer-side bg-[ #F6F6F6]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content uppercase font-semibold space-y-5">
            {/* Dashboards menu start */}
            <NavLink to="/dashboard" className={isNavLinkActive("/dashboard")}>
              <FaHome className="text-2xl" />
              <li>User Home</li>
            </NavLink>
            <NavLink to="/dashboard" className={isNavLinkActive("/dashboard")}>
              <FaCalendarAlt className="text-2xl" />
              <li>Reservation</li>
            </NavLink>
            <NavLink to="/dashboard" className={isNavLinkActive("/dashboard")}>
              <FaWallet className="text-2xl" />
              <li>Payment History</li>
            </NavLink>
            <NavLink
              to="/dashboard/mycart"
              className={isNavLinkActive("/dashboard/mycart")}
            >
              <FaShoppingCart className="text-2xl" />
              <li>My Cart</li>
            </NavLink>
            <NavLink to="/dashboard" className={isNavLinkActive("/dashboard")}>
              <GiStarsStack className="text-2xl" />
              <li>Add Review</li>
            </NavLink>
            <NavLink to="/dashboard" className={isNavLinkActive("/dashboard")}>
              <FaCalendarPlus className="text-2xl" />
              <li>My Booking</li>
            </NavLink>
            {/* Dashboards menu end */}
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
  );
};

export default Dashboard;
