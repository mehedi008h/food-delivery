import "./App.scss";
import Header from "./components/header/Header";
import Banner from "./container/banner/Banner";
import Resturent from "./container/resturent/Resturent";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Resturent />
    </div>
  );
}

export default App;
