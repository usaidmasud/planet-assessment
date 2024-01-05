import PlanetCard from "@/ui/components/PlanetCard";
import { fetchPlanet } from "@/utils/services/planets/planet.api";
import { useQuery } from "@tanstack/react-query";

function HomePage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["planets"],
    queryFn: fetchPlanet,
  });
  if (isLoading) {
    return <div className="">Loading</div>;
  }
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.results.map((item, index) => (
          <PlanetCard key={index} planet={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
