import { SiFacebook } from "react-icons/si";
import { SiApple } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

function AltAuthButtons() {
  return (
    <div className="flex justify-center gap-5 text-2xl font-bold mb-3">
      <FaGoogle />
      <SiFacebook className="text-[#4267B2]" />
      <SiApple />
    </div>
  );
}

export default AltAuthButtons;
