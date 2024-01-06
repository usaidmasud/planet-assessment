import Button from "@/ui/components/Button";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function WishlistPage() {
  const navigate = useNavigate();
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
    </div>
  );
}

export default WishlistPage;
