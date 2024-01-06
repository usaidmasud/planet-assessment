import PlanetCard from "@/ui/components/PlanetCard";
import {
  TGlobalRespon,
  TPlanet,
  TResponseData,
  fetchPlanet,
} from "@/utils/services/planets/planet.api";
import { useInfiniteQuery } from "@tanstack/react-query";

function HomePage() {
  const { isLoading, isSuccess, data } = useInfiniteQuery<TResponseData>({
    queryKey: ["planets"],
    queryFn: ({ pageParam }) => fetchPlanet(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
    getPreviousPageParam: (previousPage) => previousPage.previous,
  });
  if (isLoading) {
    return (
      <div className="p-8 flex justify-center">
        <span className="text-base text-gray-600">Loading</span>
      </div>
    );
  }
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {isSuccess &&
          data.pages.map((page) =>
            page.results.map((planet, index) => (
              <PlanetCard key={index} planet={planet} />
            )),
          )}
        <pre></pre>
      </div>
    </div>
  );
}

export default HomePage;
