import { HashRouter, Routes, Route } from "react-router";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import CheeseCake from "./menu/items/cheeseCake";
import CupOfCake from "./menu/items/cupOfCake";
import CakeWithMilk from "./menu/items/cakeWithMilk";
import Aklear from "./menu/items/aklear";
import NorCake from "./menu/items/norCake";
import IceCake from "./menu/items/iceCake";
import Donuts from "./menu/items/donuts";
import NotFound from "./NotFound";
import BoxCake from "./menu/items/boxCake";
import MiniCake from "./menu/items/miniCake";
import WholeCake from "./menu/items/wholeCake";
import CupCake from "./menu/items/cupCake";
import Cookies from "./menu/items/cookies";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/cheeseCake" element={<CheeseCake />} />
        <Route path="/menu/cupOfCake" element={<CupOfCake />} />
        <Route path="/menu/milkCake" element={<CakeWithMilk />} />
        <Route path="/menu/eclair" element={<Aklear />} />
        <Route path="/menu/plainCake" element={<NorCake />} />
        <Route path="/menu/iceCreamCakes" element={<IceCake />} />
        <Route path="/menu/donuts" element={<Donuts />} />
        <Route path="/menu/boxCake" element={<BoxCake />} />
        <Route path="/menu/miniCake" element={<MiniCake />} />
        <Route path="/menu/customCake" element={<WholeCake />} />
        <Route path="/menu/cupCake" element={<CupCake />} />
        <Route path="/menu/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
