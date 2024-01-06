import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./ui/components/Header";
import HomePage from "./ui/pages/App/HomePage";
import WrapperUseQuery from "./utils/libs/WrapperUseQuery";

function App() {
  return (
    <WrapperUseQuery>
      <div className="font-nunito bg-slate-700 antialiased text-gray-800">
        <Header />
        <HomePage />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </WrapperUseQuery>
  );
}

export default App;
