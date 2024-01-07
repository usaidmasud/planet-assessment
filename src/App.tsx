import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import WrapperUseQuery from "./utils/libs/WrapperUseQuery";
import { store } from "./utils/redux/store";
import Routes from "./utils/routes";
function App() {
  return (
    <Provider store={store}>
      <WrapperUseQuery>
        <Routes />
        <ReactQueryDevtools initialIsOpen={false} />
      </WrapperUseQuery>
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  );
}

export default App;
