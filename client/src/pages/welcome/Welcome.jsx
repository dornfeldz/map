import { Link } from "react-router-dom";
import WelcomeImage from "../../ui/WelcomeImage";

function Welcome() {
  return (
    <div className="h-screen">
      <WelcomeImage />
      <div className="px-5">
        <h1 className="text-4xl font-bold mb-3">Swipe, select and explore!</h1>
        <h2 className="text-xl mb-32">
          Map your way to the best local services!
        </h2>
        <div className="mb-5">
          <Link
            to="/signup"
            className="py-3 px-5 rounded-full bg-[#D0FE1D] text-xl font-medium"
          >
            Sign up!
          </Link>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-800 underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
