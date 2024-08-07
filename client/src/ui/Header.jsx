import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import classNames from "classnames";

function Header() {
  const [isClosed, setIsClosed] = useState(true);

  const toggleMenu = () => {
    setIsClosed(!isClosed);
    console.log(isClosed);
  };

  const backgroundStyle = classNames(
    "bg-[#00000082] absolute w-full h-screen z-[41]",
    {
      hidden: isClosed,
    }
  );
  const menuStyle = classNames("w-[50%] h-screen bg-white z-50 absolute", {
    hidden: isClosed,
  });

  return (
    <div className="h-[8vh] flex justify-between relative">
      <div className="flex flex-col justify-center pl-5 z-[51]">
        {isClosed ? (
          <HiBars3 className="text-2xl" onClick={toggleMenu} />
        ) : (
          <HiOutlineXMark className="text-2xl" onClick={toggleMenu} />
        )}
      </div>
      <div className="flex flex-col justify-center pr-5">
        <img
          src="https://i.imgur.com/tpTbyMY.jpeg"
          alt="default avatar image"
          className="rounded-full w-7 h-7"
        />
      </div>
      <div className={backgroundStyle}></div>
      <div className={menuStyle}>
        <div className="flex flex-col gap-[30rem] mt-20">
          <div>
            <p>username</p>
            <p>full name</p>
          </div>
          <div>
            <p>settings</p>
            <p>log out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
