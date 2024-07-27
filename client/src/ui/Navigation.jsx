import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex justify-around items-center h-[10vh] z-[1000]">
      <Link to="/timeline">
        <HiOutlineHome className="text-3xl" />
      </Link>
      <Link to="/search">
        <HiOutlineMagnifyingGlass className="text-3xl" />
      </Link>
      <Link to="/map">
        <img
          src="https://i.imgur.com/3Q8e7gc.png"
          alt="MAP logo"
          className="w-20 h-20 -translate-y-6 bg-[#D0FE1D] rounded-full"
        />
      </Link>
      <Link to="/chat">
        <HiOutlineChatBubbleOvalLeft className="text-3xl" />
      </Link>
      <Link to="/notifications">
        <HiOutlineBell className="text-3xl" />
      </Link>
    </div>
  );
}

export default Navigation;
