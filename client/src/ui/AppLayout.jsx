import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-x-scroll scrollbar-hide">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
}

export default AppLayout;
