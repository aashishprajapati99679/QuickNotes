
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#8E4585" }} className="w-full h-[45px] flex justify-center items-center p-4 gap-x-5">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-[#FFD6E8] font-semibold text-xl"
              : "text-white font-medium text-xl"
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
