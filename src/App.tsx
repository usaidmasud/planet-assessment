import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import WrapperUseQuery from "./utils/libs/WrapperUseQuery";
import Routes from "./utils/routes";
function App() {
  return (
    <WrapperUseQuery>
      <div className="font-nunito antialiased ">
        <Routes />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-center" reverseOrder={false} />
    </WrapperUseQuery>
  );
}

export default App;
