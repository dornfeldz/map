import { HiBars3 } from "react-icons/hi2";

function Header() {
  return (
    <div className="h-[10vh] flex justify-between px-5">
      <div className="flex flex-col justify-center">
        <HiBars3 className="text-xl" />
      </div>
      <div className="flex flex-col justify-center">
        <img
          src="public\imgs\avatar.jpg"
          alt="default avatar image"
          className="rounded-full w-6 h-6"
        />
      </div>
    </div>
  );
}

export default Header;
