import Header from "../../home/header";
import "./items.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function TieredCake() {
  const { t, i18n } = useTranslation();

  const items = [
    {
      id: crypto.randomUUID(),
      name: t("Tiered cake starts from 10 persons"),
      price: "2300₺",
    },
    {
      id: crypto.randomUUID(),
      name: t("Tiered cake price increases according to size and shape"),
    },
  ];

  return (
    <>
      <title>IY-Tiered-Cake</title>
      <Header />
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Tiered Cake")}</h1>
          <h2>{t("Price")}</h2>
        </div>

        <div className="br"></div>

        <div className="items-dis">
          {items.map((item) => (
            <div key={item.id} className="item-dis">
              <p>{item.name}</p>
              {item.price ? <p>{item.price}</p> : null}
            </div>
          ))}
        </div>

        <div className="order-btn">
          <Link
            className="link-btn"
            to={`https://wa.me/+905313591682?text=${encodeURIComponent(
              t("WhatsApp Message"),
            )}`}
          >
            {t("Order Now")}
          </Link>
        </div>
      </div>
    </>
  );
}
