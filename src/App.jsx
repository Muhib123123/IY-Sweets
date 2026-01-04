import { HashRouter, Routes, Route } from "react-router";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import CheeseCake from "./menu/items/cheeseCake";
import CupCake from "./menu/items/cupCake";
import CakeWithMilk from "./menu/items/cakeWithMilk";
import Aklear from "./menu/items/aklear";
import NorCake from "./menu/items/norCake";
import IceCake from "./menu/items/iceCake";
import Donuts from "./menu/items/donuts";
import NotFound from "./NotFound";

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/cheeseCake" element={<CheeseCake />} />
          <Route path="/menu/cupCakes" element={<CupCake />} />
          <Route path="/menu/milkCake" element={<CakeWithMilk />} />
          <Route path="/menu/eclair" element={<Aklear />} />
          <Route path="/menu/plainCake" element={<NorCake />} />
          <Route path="/menu/iceCreamCakes" element={<IceCake />} />
          <Route path="/menu/donuts" element={<Donuts />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </HashRouter>
  );
}

export default App;
