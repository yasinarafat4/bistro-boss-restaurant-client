import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const navOptions = (
    <>
      <li>HOME</li>
      <li>CONTACT US</li>
      <li>DASHBOARD</li>
      <li>OUR MENU</li>
      <li>OUR SHOP</li>
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-70 bg-black text-white rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl md:text-3xl font-semibold">BISTRO BOSS</h2>
          <p className="text-xs md:text-base tracking-[5px] md:tracking-[9px]">
            RESTAURANT
          </p>
        </div>
      </div>
      <div className="ms-40 xl:ms-96 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-bold">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <FaShoppingCart />
        <button className="btn btn-success mx-2">Login</button>
        <FaUserCircle />
      </div>
    </div>
  );
};

export default NavBar;