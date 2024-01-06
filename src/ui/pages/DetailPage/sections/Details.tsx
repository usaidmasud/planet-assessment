import Avatar from "@/ui/components/Avatar";
import { UserIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

interface ResidentProps {
  title: string;
  value: string[];
  icon: ReactNode;
}

function Details({ value, title, icon }: ResidentProps) {
  return (
    <div className="w-full sm:w-1/2 bg-white overflow-hidden shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center border-b border-gray-400">
        <h5 className=" font-semibold text-xl pb-2 ">{title}</h5>
        <span className="font-bold bg-primary-main text-white rounded-full px-2 py-0.5">
          {value.length}
        </span>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        {value.map((item, index) => (
          <Avatar icon={icon} link={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Details;
