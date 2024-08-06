import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-x-scroll scrollbar-hide">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
}

export default AppLayout;
