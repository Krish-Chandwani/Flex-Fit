import { assets } from "../Assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-400 font-semibold mt-10 py-4 px-6">

      <div className="text-center mb-6">
        <img
          src={assets.logo}
          alt="FlexFit Logo"
          className="w-28 mx-auto mb-3"
        />
        <p className="text-sm text-gray-600">
          Your one-stop fashion destination.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-700 mb-6">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/about" className="hover:text-black">About</Link>
        <Link to="/contact" className="hover:text-black">Contact</Link>
        <Link to="/collection" className="hover:text-black">Collection</Link>
      </div>

      <div className="text-center text-sm text-gray-600 mb-4">
        <p>Email: support@flexfit.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

      <div className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} FlexFit. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;