import { Routes } from "react-router";
import { Route } from "react-router";
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

    <Routes>
      <Route path="/IY-Sweets/" element={<Home />} />
      <Route path="/IY-Sweets//menu" element={<Menu />} />
      <Route path="/IY-Sweets//menu/cheeseCake" element={<CheeseCake />} />
      <Route path="/IY-Sweets//menu/cupCake" element={<CupCake />} />
      <Route path="/IY-Sweets//menu/cakeWithMilk" element={<CakeWithMilk />} />
      <Route path="/IY-Sweets//menu/aklear" element={<Aklear />} />
      <Route path="/IY-Sweets//menu/norCake" element={<NorCake />} />
      <Route path="/IY-Sweets//menu/iceCake" element={<IceCake />} />
      <Route path="/IY-Sweets//menu/donuts" element={<Donuts />} />
    </Routes>

  );
}

export default App;
