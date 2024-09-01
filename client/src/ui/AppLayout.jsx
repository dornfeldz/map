import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Loader from "./Loader";

function AppLayout({ isClosed, setIsClosed }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] relative">
      {isLoading && <Loader />}
      <Header isClosed={isClosed} setIsClosed={setIsClosed} />
      <div className="overflow-x-scroll scrollbar-hide z-0">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
}

export default AppLayout;
