import Header from "@/ui/components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className=" flex justify-center bg-slate-600 min-h-screen text-gray-700">
      <div className="w-full max-w-3xl bg-slate-100">
        <div className="">
          <Header />
          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
