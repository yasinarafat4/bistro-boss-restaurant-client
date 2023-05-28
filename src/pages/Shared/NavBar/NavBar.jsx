import { FaLock, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const isNavLinkActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const navOptions = (
    <>
      <NavLink to="/" className={isNavLinkActive("/")}>
        <li>HOME</li>
      </NavLink>
      <NavLink to="/contact" className={isNavLinkActive("/contact")}>
        <li>CONTACT US</li>
      </NavLink>
      <NavLink to="/dashboard" className={isNavLinkActive("/dashboard")}>
        <li>DASHBOARD</li>
      </NavLink>
      <NavLink to="/menu" className={isNavLinkActive("/menu")}>
        <li>OUR MENU</li>
      </NavLink>
      <NavLink to="/order/desert" className={isNavLinkActive("/order/desert")}>
        <li>OUR SHOP</li>
      </NavLink>
      <NavLink to="/">
        <button className="btn btn-sm gap-2">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+0</div>
        </button>
      </NavLink>
      <Link to="/secret">
        <FaLock></FaLock>
      </Link>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content space-y-4 p-2 shadow bg-opacity-70 bg-black text-white rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/">
          <div className="flex flex-col">
            <h2
              className="text-xl md:text-3xl font-bold"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              BISTRO BOSS
            </h2>
            <p
              className="text-xs md:text-base tracking-[5px] md:tracking-[9px]"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              RESTAURANT
            </p>
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex justify-center items-center mt-4 ms-12">
        <ul className="menu menu-horizontal px-1 gap-6 font-[600] text-sm xl:text-lg">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end flex gap-2 font-[600] text-sm xl:text-lg">
        {user ? (
          <>
            <p onClick={handleLogOut} className="cursor-pointer">
              LOGOUT
            </p>
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-offset-base-100 ring-offset-2">
                <img title={user?.displayName} src={user?.photoURL} />
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/login" className={isNavLinkActive("/login")}>
              <p>LOGIN</p>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
