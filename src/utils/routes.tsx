import DetailPage from "@/ui/pages/DetailPage";
import HomePage from "@/ui/pages/HomePage";
import Layout from "@/ui/pages/Layout";
import NoMatch from "@/ui/pages/NoMatch";
import WishlistPage from "@/ui/pages/WishlistPage";
import { useRoutes } from "react-router-dom";

export default function Routes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/detail/:pid", element: <DetailPage /> },
        { path: "/whislist", element: <WishlistPage /> },
      ],
    },
    { path: "*", element: <NoMatch /> },
  ]);
  return element;
}
