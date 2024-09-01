import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Welcome from "./pages/welcome/Welcome";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Timeline from "./pages/timeline/Timeline";
import Map from "./pages/map/Map";
import Notifications from "./pages/notifications/Notifications";
import Search from "./pages/search/Search";
import Chat from "./pages/chat/Chat";
import { useState } from "react";
import HamburgerMenu from "./ui/HamburgerMenu";

function App() {
  const [isClosed, setIsClosed] = useState(true);

  const router = createBrowserRouter([
    {
      element: <AppLayout isClosed={isClosed} setIsClosed={setIsClosed} />,
      children: [
        {
          path: "/map",
          element: <Map />,
          loader: async () => {
            return fetch("https://map-backend-tau.vercel.app/shops");
          },
        },
        {
          path: "/timeline",
          element: <Timeline />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
      ],
    },
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="max-w-[400px] bg-white mx-auto relative overflow-hidden">
      {!isClosed && (
        <HamburgerMenu isClosed={isClosed} setIsClosed={setIsClosed} />
      )}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
