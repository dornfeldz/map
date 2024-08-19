import classNames from "classnames";

function HamburgerMenu({ isClosed }) {
  const backgroundStyle = classNames(
    "bg-[#00000040] absolute w-full h-screen z-[22]",
    {
      hidden: isClosed,
    }
  );
  const menuStyle = classNames(
    "w-[50%] h-screen bg-white absolute left-[-50%] animate-slideIn z-[21]",
    {
      hidden: isClosed,
    }
  );

  return (
    <div className={backgroundStyle}>
      <div className={menuStyle}>
        <div className="flex flex-col mt-20 h-[84vh] justify-between text-lg">
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
