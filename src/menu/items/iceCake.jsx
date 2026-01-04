import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

function IceCake() {
  const { t, i18n } = useTranslation();
  const items = [
    {
      id: crypto.randomUUID(),
      price: 40,
      name: t("Ice Cream Cake"),
    },
    {
      id: crypto.randomUUID(),
      price: 30,
      name: t("Babous Cake"),
    },
  ];
  return (
    <>
      <title>IY-Ice-Cream-Cake</title>
      <Header />
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Ice Cream Cake")}</h1>
          <h2>{t("Price")}</h2>
        </div>
        <div className="br"></div>
        <div className="items-dis">
          {items.map((item) => (
            <div key={item.id} className="item-dis">
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

export default IceCake;
