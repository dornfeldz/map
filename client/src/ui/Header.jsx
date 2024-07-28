import { HiBars3 } from "react-icons/hi2";

function Header() {
  return (
    <div className="h-[8vh] flex justify-between px-5">
      <div className="flex flex-col justify-center">
        <HiBars3 className="text-2xl" />
      </div>
      <div className="flex flex-col justify-center">
        <img
          src="https://i.imgur.com/tpTbyMY.jpeg"
          alt="default avatar image"
          className="rounded-full w-7 h-7"
        />
      </div>
    </div>
  );
}

export default Header;
