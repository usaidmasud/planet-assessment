"use client";

import Button from "@/ui/components/Button";
import LoadingFetch from "@/ui/components/LoadingFetch";
import PlanetCard from "@/ui/components/PlanetCard";
import {
  TResponseData,
  fetchPlanet,
} from "@/utils/services/planets/planet.api";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { ref, inView } = useInView();
  const { isLoading, isSuccess, data, hasNextPage, fetchNextPage } =
    useInfiniteQuery<TResponseData>({
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
  const navigate = useNavigate();

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="">
      <div className="flex justify-center mb-4 sm:mb-0 sm:justify-end">
        <Button
          onClick={() => {
            navigate({
              pathname: "/wishlist",
            });
          }}
        >
          <div className="inline-flex gap-1 items-center align-middle">
            <HeartIcon className="w-5 h-5" /> Your Wishlist
          </div>
        </Button>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-black text-primary-main text-center">
          List of Planet
        </h2>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <LoadingFetch size="lg" />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {isSuccess &&
          data.pages.map((page) =>
            page.results.map((planet, index) => (
              <PlanetCard key={index} planet={planet} />
            )),
          )}
      </div>
      <div className="w-full mt-6 flex justify-center">
        {hasNextPage && (
          <div ref={ref}>
            <LoadingFetch size="md" />
          </div>
        )}
        {!isLoading && !hasNextPage && (
          <span className="text-sm bg-primary-hover text-white rounded-full px-4 py-1 font-semibold">
            End of page
          </span>
        )}
      </div>
    </div>
  );
}

export default HomePage;
