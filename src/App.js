import "./App.scss";
import Header from "./components/header/Header";
import Banner from "./container/banner/Banner";
import Resturent from "./container/resturent/Resturent";
import SearchResturent from "./container/resturent/SearchResturent";
import Specialities from "./container/resturent/Specialities";
import WeHave from "./container/resturent/WeHave";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Resturent />
      <SearchResturent />
      <Specialities />
      <WeHave />
    </div>
  );
}

export default App;
