import { Routes } from "react-router";
import { Route } from "react-router";
import { StrictMode } from "react";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import CheeseCake from "./menu/items/cheeseCake";
import CupCake from "./menu/items/cupCake";
import CakeWithMilk from "./menu/items/cakeWithMilk";
import Aklear from "./menu/items/aklear";
import NorCake from "./menu/items/norCake";
import IceCake from "./menu/items/iceCake";
import Donuts from "./menu/items/donuts";
function App() {
  return (
    <BrowserRouter basename="/IY-Sweets">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/cheeseCake" element={<CheeseCake />} />
        <Route path="/menu/cupCake" element={<CupCake />} />
        <Route path="/menu/cakeWithMilk" element={<CakeWithMilk />} />
        <Route path="/menu/aklear" element={<Aklear />} />
        <Route path="/menu/norCake" element={<NorCake />} />
        <Route path="/menu/iceCake" element={<IceCake />} />
        <Route path="/menu/donuts" element={<Donuts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
