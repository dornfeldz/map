import { Link } from "react-router-dom";
import AltAuthButtons from "../../ui/AltAuthButtons";
import WelcomeImage from "../../ui/WelcomeImage";

function Signup() {
  return (
    <div className="h-screen">
      <WelcomeImage />
      <AltAuthButtons />
      <hr className="w-[75%] ml-auto mr-auto mb-3" />
      <form
        action=""
        className="flex flex-col mr-auto ml-auto w-[70%] gap-2 mb-10"
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="bg-gray-300 px-4 py-2 rounded-full"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Full name"
          className="bg-gray-300 px-4 py-2 rounded-full"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Username"
          className="bg-gray-300 px-4 py-2 rounded-full"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="bg-gray-300 px-4 py-2 rounded-full"
        />
      </form>
      <div className="w-32 ml-auto mr-auto">
        <Link
          to="/map"
          className="py-3 px-5 rounded-full bg-[#D0FE1D] text-xl font-medium flex justify-center"
        >
          Sign up!
        </Link>
      </div>
      <p className="flex justify-center mt-16 underline text-blue-800">T&C</p>
    </div>
  );
}

export default Signup;
