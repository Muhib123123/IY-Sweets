import Header from "../home/header";
import "./Menu.css";
import { Link } from "react-router";
import cheeseCake from "../assets/cheeseCake.jpg";
import cupOfCake from "../assets/cup.jpg";
import cakeWithMilk from "../assets/cakeWithMilk.jpg";
import aklear from "../../src/assets/aklear.jpg";
import norCake from "../../src/assets/norCake.jpg";
import iceCake from "../../src/assets/iceCake.jpg";
import donuts from "../../src/assets/donuts.jpg";
import miniCake from "../../src/assets/miniCakes.jpeg";
import boxCake from "../../src/assets/boxCake.jpeg";
import WholeCake from "../../src/assets/WholeCake.jpeg";
import cupCake from "../../src/assets/cupCakes.jpeg";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();
  const items = [
    {
      id: crypto.randomUUID(),
      src: boxCake,
      title: t("Box of Cakes"),
      link: "/menu/boxCake",
    },
    {
      id: crypto.randomUUID(),
      src: WholeCake,
      title: t("Customised Cake"),
      link: "/menu/customCake",
    },
    {
      id: crypto.randomUUID(),
      src: miniCake,
      title: t("Mini Cakes"),
      link: "/menu/miniCake",
    },
    {
      id: crypto.randomUUID(),
      src: cupCake,
      title: t("Cupcakes"),
      link: "/menu/cupCake",
    },
    {
      id: crypto.randomUUID(),
      src: cheeseCake,
      title: t("Cheesecakes"),
      link: "/menu/cheeseCake",
    },
    {
      id: crypto.randomUUID(),
      src: donuts,
      title: t("Donuts"),
      link: "/menu/donuts",
    },
    {
      id: crypto.randomUUID(),
      src: cupOfCake,
      title: t("Cup of Cake"),
      link: "/menu/cupOfCake",
    },
    {
      id: crypto.randomUUID(),
      src: cakeWithMilk,
      title: t("Milk Cake"),
      link: "/menu/milkCake",
    },
    {
      id: crypto.randomUUID(),
      src: aklear,
      title: t("Éclair"),
      link: "/menu/eclair",
    },
    {
      id: crypto.randomUUID(),
      src: iceCake,
      title: t("Ice Cream Cakes"),
      link: "/menu/iceCreamCakes",
    },
    {
      id: crypto.randomUUID(),
      src: norCake,
      title: t("Plain Cake"),
      link: "/menu/plainCake",
    },
  ];

  return (
    <>
      <title>IY-Menu</title>
      <div className="menu">
        <Header />

        <div className="container">
          {items.map((item) => (
            <Link className="item" key={item.id} to={item.link}>
              <img src={item.src} alt="img" />
              <h2 className="title">{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
