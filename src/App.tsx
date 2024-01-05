import Header from "./ui/components/Header";
import HomePage from "./ui/pages/App/HomePage";
import WrapperUseQuery from "./utils/libs/WrapperUseQuery";

function App() {
  return (
    <WrapperUseQuery>
      <div className="font-nunito bg-slate-200 antialiased">
        <Header />
        <HomePage />
      </div>
    </WrapperUseQuery>
  );
}

export default App;
