import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-primary-main text-white border-gray-200 shadow-lg ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <GlobeAltIcon className="h-8 w-8" />

          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Planet Assessment
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
