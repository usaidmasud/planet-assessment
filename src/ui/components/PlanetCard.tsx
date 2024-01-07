import { TPlanet } from "@/utils/services/planets/planet.api";
import { XCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getIdFromUrl } from "../../utils/getIdFromUrl";
import { thousandFormat } from "../../utils/thousandFormat";
import Button from "./Button";
import {
  default as CardPlanetDescription,
  default as PlanetCardDescription,
} from "./PlanetCardDescription";
interface PlanetCardProps {
  planet?: TPlanet;
  showRemove?: boolean;
  handleRemove?: () => void;
}

function PlanetCard({ planet, showRemove, handleRemove }: PlanetCardProps) {
  const navigate = useNavigate();
  if (!planet) return <div></div>;
  return (
    <div className="w-full sm:max-w-xs h-auto overflow-hidden shadow-lg rounded-lg bg-white relative">
      <div className="relative">
        <img
          src="https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg"
          alt=""
          className="object-bottom object-cover w-full h-24"
        />
        <div className="w-14 h-14 rounded-full bg-gray-200 absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center shadow-lg">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/10/17/38/moon-26619_1280.png"
            alt=""
            className="w-14 h-14"
          />
        </div>
      </div>
      <div className="p-6 mt-2 mb-10">
        <h5 className="text-xl font-bold mb-2 text-center">{planet?.name}</h5>
        <div className="mt-4">
          <ul className="flex flex-col gap-1">
            <PlanetCardDescription
              label="Rotation Period"
              value={thousandFormat(planet?.rotation_period)}
            />
            <PlanetCardDescription
              label="Orbital Period"
              value={thousandFormat(planet?.orbital_period)}
            />
            <PlanetCardDescription
              label="Diameter"
              value={thousandFormat(planet?.diameter)}
            />
            <PlanetCardDescription
              label="Population"
              value={thousandFormat(planet?.population)}
            />
            <CardPlanetDescription label="Terrain" value={planet?.terrain} />
            <PlanetCardDescription
              label="Surface Water"
              value={thousandFormat(planet?.surface_water)}
            />
          </ul>
        </div>
      </div>
      {showRemove && (
        <div className="absolute top-2 right-2 z-50">
          <button
            onClick={handleRemove}
            title="Remove from wishlist"
            className=" text-secondary-light rounded-full p-1 hover:scale-110 transition duration-300 hover:text-secondary-main"
          >
            <XCircleIcon stroke="2" className="w-8 h-8" />
          </button>
        </div>
      )}
      {planet && planet.url && (
        <div className="absolute bottom-4 w-full flex px-4">
          <Button
            onClick={() => {
              navigate({
                pathname: "/detail/" + getIdFromUrl(planet?.url),
              });
            }}
            block
          >
            View Detail
          </Button>
        </div>
      )}
    </div>
  );
}

export default React.memo(PlanetCard);
