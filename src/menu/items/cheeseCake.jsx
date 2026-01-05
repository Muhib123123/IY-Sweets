import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

function CheeseCake() {
  const { t, i18n } = useTranslation();
  const price = 95;
  const items = [
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Lotus"),
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Chocolate"),
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Strawberry"),
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Caramel"),
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Pistachio"),
    },
  ];
  return (
    <>
      <title>IY-Cheesecake</title>
      <Header />
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Cheesecakes")}</h1>
          <h2>{t("Price")}</h2>
        </div>
        <div className="br"></div>
        <div className="items-dis">
          {items.map((item) => (
            <div className="item-dis" key={item.id}>
              <p>{item.name}</p>
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

export default CheeseCake;
