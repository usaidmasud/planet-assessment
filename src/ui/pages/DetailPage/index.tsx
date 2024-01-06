import Button from "@/ui/components/Button";
import LoadingFetch from "@/ui/components/LoadingFetch";
import PlanetCardDetail from "@/ui/components/PlanetCardDetail";
import { TPlanet, getPlanetById } from "@/utils/services/planets/planet.api";
import { ChevronLeftIcon, FilmIcon, UserIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Details from "./sections/Details";

function DetailPage() {
  const { pid } = useParams();
  const navigate = useNavigate();
  const { isLoading, isSuccess, data } = useQuery<TPlanet>({
    queryKey: ["planet", pid],
    queryFn: () => getPlanetById(pid!),
  });
  return (
    <div className="">
      <div className="mb-8 flex items-center gap-4">
        <Button
          onClick={() =>
            navigate({
              pathname: "/",
            })
          }
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <h2 className="text-2xl text-primary-main font-black ">
          Detail of <span className="text-secondary-main">{data?.name}</span>{" "}
          Planet
        </h2>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <LoadingFetch size="lg" />
        </div>
      )}
      {isSuccess && (
        <div className="">
          <PlanetCardDetail planet={data} />
          <div className="flex flex-col sm:flex-row mt-6 gap-4">
            <Details
              icon={<UserIcon className="w-6 h-6" />}
              title="Residents"
              value={data.residents}
            />
            <Details
              icon={<FilmIcon className="w-6 h-6" />}
              title="Films"
              value={data.films}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
