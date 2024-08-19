import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";

function Header() {
  const [isClosed, setIsClosed] = useState(true);

  const toggleMenu = () => {
    setIsClosed(!isClosed);
    console.log(isClosed);
  };

  return (
    <div className="h-[8vh] flex justify-between relative overflow-hidden">
      <div className="flex flex-col justify-center pl-5 z-[23]">
        {isClosed ? (
          <HiBars3 className="text-2xl" onClick={toggleMenu} />
        ) : (
          <HiOutlineXMark className="text-2xl" onClick={toggleMenu} />
        )}
      </div>
      <div className="flex flex-col justify-center pr-5">
        <Link to="/profile">
          <img
            src="https://i.imgur.com/tpTbyMY.jpeg"
            alt="default avatar image"
            className="rounded-full w-7 h-7"
          />
        </Link>
      </div>
      {!isClosed && <HamburgerMenu isClosed={isClosed} />}
    </div>
  );
}

export default Header;
