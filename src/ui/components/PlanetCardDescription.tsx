import clsx from "clsx";

type TDescription = {
  label?: string;
  value?: string;
  textSize?: "sm" | "md";
};
export default function PlanetCardDescription({
  label,
  value,
  textSize = "sm",
}: TDescription) {
  return (
    <li className={clsx("flex items-start justify-between")}>
      <span
        className={clsx("w-1/2 tracking-wide", {
          "text-sm": textSize === "sm",
          "text-base": textSize === "md",
        })}
      >
        {label ?? "-"}
      </span>
      <span
        className={clsx("w-1/2 font-semibold text-right", {
          "text-sm": textSize === "sm",
          "text-base": textSize === "md",
        })}
      >
        {value ?? "-"}
      </span>
    </li>
  );
}
