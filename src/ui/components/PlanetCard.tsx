import { TPlanet } from "@/utils/services/planets/planet.api";
import { thousandFormat } from "@/utils/thousandFormat";
import Button from "./Button";

interface PlanetCardProps {
  planet: TPlanet;
}

function PlanetCard({ planet }: PlanetCardProps) {
  return (
    <div className="w-full overflow-hidden shadow-lg rounded-lg bg-white">
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
      <div className="p-6 mt-2">
        <h5 className="text-xl font-bold mb-2 text-center">{planet.name}</h5>
        <div className="mt-4">
          <ul className="flex flex-col gap-1">
            <Description
              label="Rotation Period"
              value={thousandFormat(planet.rotation_period)}
            />
            <Description
              label="Orbital Period"
              value={thousandFormat(planet.orbital_period)}
            />
            <Description
              label="Diameter"
              value={thousandFormat(planet.diameter)}
            />
            <Description
              label="Population"
              value={thousandFormat(planet.population)}
            />
            <Description label="Terrain" value={planet.terrain} />
            <Description
              label="Surface Water"
              value={thousandFormat(planet.surface_water)}
            />
          </ul>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Button size="sm">Resident</Button>
          <Button size="sm">Film</Button>
        </div>
      </div>
    </div>
  );
}

export default PlanetCard;

type TDescription = {
  label: string;
  value: string;
};
function Description({ label, value }: TDescription) {
  return (
    <li className="flex items-start text-sm justify-between">
      <span className=" tracking-wide">{label}</span>
      <span className="font-semibold text-right">{value}</span>
    </li>
  );
}