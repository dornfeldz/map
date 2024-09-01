import classNames from "classnames";
import { HiOutlineXMark } from "react-icons/hi2";

function HamburgerMenu({ isClosed, setIsClosed }) {
  const backgroundStyle = classNames(
    "bg-[#00000040] absolute w-full h-screen z-[41]",
    {
      hidden: isClosed,
    }
  );
  const menuStyle = classNames(
    "w-[50%] h-screen bg-white absolute left-[-50%] slide z-[42]",
    {
      hidden: isClosed,
    }
  );

  const toggleMenu = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className={backgroundStyle}>
      <div className={menuStyle}>
        <div className="p-5">
          <HiOutlineXMark className="text-2xl" onClick={toggleMenu} />
        </div>

        <div className="flex flex-col mt-5 h-[84vh] justify-between text-lg">
          <div className="flex flex-col gap-2 ml-2 ">
            <p>Invite friends</p>
            <p>Liked</p>
            <p>Saved</p>
            <p>Accessibility</p>
            <p>Help</p>
            <p>About</p>
          </div>
          <div className="flex flex-col gap-2 ml-2">
            <p>Settings</p>
            <p className="text-red-500">Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
