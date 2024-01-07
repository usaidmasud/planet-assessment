import { formatDate } from "../../utils/formatDate";
import { useAppDispatch } from "../../utils/redux/hooks";
import { addWhislist } from "../../utils/redux/slices/whislist.slice";
import { TPlanet } from "../../utils/services/planets/planet.api";
import { thousandFormat } from "../../utils/thousandFormat";
import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import PlanetCardDescription from "./PlanetCardDescription";
interface PlanetCardProps {
  planet: TPlanet;
}

function PlanetCardDetail({ planet }: PlanetCardProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-auto overflow-hidden shadow-lg rounded-lg bg-white relative sm:flex">
      <div className="relative sm:w-4/12">
        <img
          src="https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg"
          alt=""
          className="object-bottom object-cover w-full h-48 sm:h-full"
        />
        <div className=" sm:hidden w-14 h-14 rounded-full bg-gray-200 absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center shadow-lg">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/10/17/38/moon-26619_1280.png"
            alt=""
            className="w-14 h-14"
          />
        </div>
        <div className="hidden  w-14 h-14 rounded-full bg-gray-200 absolute -right-6  top-1/2 transform -translate-y-1/2 sm:flex justify-center items-center shadow-lg">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/10/17/38/moon-26619_1280.png"
            alt=""
            className="w-14 h-14"
          />
        </div>
      </div>
      <div className="p-6 sm:p-4 ml-0 sm:ml-6 sm:mt-0 mt-2 w-full sm:w-4/6">
        <h5 className="text-xl font-bold mb-2 text-center">Description</h5>
        <div className="mt-4">
          <ul className="flex flex-col gap-1">
            <PlanetCardDescription
              label="Rotation Period"
              value={thousandFormat(planet.rotation_period)}
            />
            <PlanetCardDescription
              label="Orbital Period"
              value={thousandFormat(planet.orbital_period)}
            />
            <PlanetCardDescription
              label="Diameter"
              value={thousandFormat(planet.diameter)}
            />
            <PlanetCardDescription label="Climate" value={planet.climate} />
            <PlanetCardDescription label="Gravity" value={planet.gravity} />
            <PlanetCardDescription label="Terrain" value={planet.terrain} />
            <PlanetCardDescription
              label="Surface Water"
              value={thousandFormat(planet.surface_water)}
            />
            <PlanetCardDescription
              label="Population"
              value={thousandFormat(planet.population)}
            />
            <PlanetCardDescription
              label="Created"
              value={formatDate(planet.created, true)}
            />
            <PlanetCardDescription
              label="Edited"
              value={formatDate(planet.edited, true)}
            />
          </ul>
        </div>
        {/*  */}
        <div className="mt-4">
          <Button
            onClick={() => {
              dispatch(addWhislist(planet));
              toast.success("Planet was added to whislist");
            }}
            block
          >
            <div className="flex justify-center items-center gap-2">
              <HeartIcon className="w-5 h-5" />
              <span>Add to Wishlist</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PlanetCardDetail);
