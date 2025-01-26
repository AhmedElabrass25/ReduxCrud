import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="w-full p-4 bg-gray-300 fixed top-0 left-0 right-0 z-[999]">
        <div className="container w-full flex">
          <Link
            to="/"
            className="logo text-2xl font-bold w-fit text-gray-600 mr-20"
          >
            CRUD
          </Link>
          <div className="row w-full">
            <ul className="w-full flex gap-5 justify-end">
              <li>
                <NavLink
                  to="/"
                  className="text-[18px] font-semibold text-gray-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add"
                  className="text-[18px] font-semibold text-gray-700"
                >
                  AddPost
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
