import Button from "@/ui/components/Button";
import PlanetCard from "@/ui/components/PlanetCard";
import {
  TResponseData,
  fetchPlanet,
} from "@/utils/services/planets/planet.api";
import { useInfiniteQuery } from "@tanstack/react-query";

function HomePage() {
  const {
    isLoading,
    isSuccess,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<TResponseData>({
    queryKey: ["planets"],
    queryFn: ({ pageParam }) => fetchPlanet(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) {
        return null; // No more pages
      }
      const url = new URL(lastPage.next);
      const pageParam = url.searchParams.get("page");
      return pageParam;
    },
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
      </div>
      <div className="w-full mt-6 flex justify-center">
        {hasNextPage && (
          <Button
            size="lg"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        )}
        {!hasNextPage && (
          <span className="text-sm text-secondary-main font-semibold">
            End of page
          </span>
        )}
      </div>
    </div>
  );
}

export default HomePage;
