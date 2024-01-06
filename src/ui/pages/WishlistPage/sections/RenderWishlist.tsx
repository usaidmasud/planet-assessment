import PlanetCard from "@/ui/components/PlanetCard";
import { useAppDispatch } from "@/utils/redux/hooks";
import { removeWishlist } from "@/utils/redux/slices/whislist.slice";
import { TPlanet } from "@/utils/services/planets/planet.api";

interface RenderWishlistProps {
  data: TPlanet[];
  currentPage: number;
  itemsPerPage: number;
}
export default function RenderWishlist({
  data,
  currentPage,
  itemsPerPage,
}: RenderWishlistProps) {
  const dispatch = useAppDispatch();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {currentItems.map((item, index) => (
        <PlanetCard
          showRemove
          handleRemove={() => {
            console.log("item ", item);
            dispatch(removeWishlist(item));
          }}
          key={index}
          planet={item}
        />
      ))}
    </div>
  );
}
