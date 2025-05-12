import { Link } from "react-router-dom";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="relative bg-color ">
      {/* Background Icons */}
      <PiBracketsCurlyBold className="absolute text-main-red opacity-30 w-24 h-24 md:w-32 md:h-32 top-10 left-10" />
      <IoCodeSlashSharp className="absolute text-main-red opacity-30 w-24 h-24 md:w-32 md:h-32 bottom-10 right-10" />
      <FaCloud className="absolute text-main-red opacity-30 w-24 h-24 md:w-32 md:h-32 top-1/3 left-3/6" />

      {/* Content */}
      <div className="error-container">
        <h1 className="error-404">404</h1>
        <h3 className="h3">
          Oops! The page you're looking for doesn't exist.
        </h3>
        <Link
          to="/"
          className="btn btn-red"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
