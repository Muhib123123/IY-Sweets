import Header from "../../home/header";
import { Link } from "react-router";
import "./items.css";
import { useTranslation } from "react-i18next";
import cupOfCake1 from "../../assets/cupOfCake1.jpeg";
import cupOfCake2 from "../../assets/cupOfCake2.jpeg"

function CupOfCake() {
  const { t, i18n } = useTranslation();
  const price = 80;
  const items = [
    {
      id: crypto.randomUUID(),
      price: "90",
      name: t("Dubai Chocolate")
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Oreo")
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Caramel")
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Pistachio")
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Lotus")
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Strawberry")
    }

  ];
  return (
    <>
      <title>IY-Cupcakes</title>
      <Header />
      <div className="container">
        <div className="item">
          <img src={cupOfCake1} alt="" />
        </div>
        <div className="item">
          <img src={cupOfCake2} alt="" />
        </div>
      </div>
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Cup of Cake Jumbo")}</h1>
          <h2>{t("Price")}</h2>
        </div>
        <div className="br"></div>
        <div className="items-dis">
          {items.map((item) => (
            <div key={item.id} className="item-dis">
              <p> {item.name}</p>
              <p>{item.price}₺</p>
            </div>
          ))}
        </div>
        <div className="order-btn">
          <Link
            className="link-btn"
            to={`https://wa.me/+905313591682?text=${encodeURIComponent(
              t("WhatsApp Message")
            )}`}
          >
            {t("Order Now")}
          </Link>
        </div>
      </div>
    </>
  );
}

export default CupOfCake;
