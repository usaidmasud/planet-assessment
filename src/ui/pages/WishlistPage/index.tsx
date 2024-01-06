import Button from "@/ui/components/Button";
import { useAppSelector } from "@/utils/redux/hooks";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./sections/Pagination";
import RenderWishlist from "./sections/RenderWishlist";

function WishlistPage() {
  const navigate = useNavigate();
  const { data } = useAppSelector((state) => state.whislist);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

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
          List <span className="text-secondary-main">Whislist</span>
        </h2>
      </div>
      {data.length <= 0 && (
        <div className="">
          <h5 className="">No record found</h5>
        </div>
      )}
      {data.length > 0 && (
        <div className="">
          <RenderWishlist
            data={data}
            currentPage={currentPage}
            itemsPerPage={2}
          />
          <Pagination
            totalItems={data.length}
            itemsPerPage={2}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
