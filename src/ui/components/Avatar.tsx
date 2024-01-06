import { ReactNode } from "react";

type AvatarProps = {
  link: string;
  icon: ReactNode;
};
export default function Avatar({ link, icon }: AvatarProps) {
  return (
    <a
      href={link}
      className="h-10 w-10 flex justify-center items-center bg-primary-main text-white rounded-full p-1.5 shadow-md hover:-translate-y-1 transition-transform duration-300"
    >
      {icon}
    </a>
  );
}
