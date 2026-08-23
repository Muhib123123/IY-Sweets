import Header from "../../home/header";
import "./items.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import custom1 from "../../assets/custom1.jpeg";
import custom2 from "../../assets/custom2.jpeg";

export default function WholeCake() {
  const { t, i18n } = useTranslation();

  const items = [
    {
      id: crypto.randomUUID(),
      name: t(
        "Cake (6 persons) - starts from 1100₺ with whipped cream packaging",
      ),
      price: "",
    },
    {
      id: crypto.randomUUID(),
      name: t("Cake (6 persons) - starts from 1300₺ with butter packaging"),
      price: "",
    },
    {
      id: crypto.randomUUID(),
      name: t("Prices increase as the mold size and number of people increase"),
      price: "",
    },
  ];

  return (
    <>
      <title>IY-Custom-Cake</title>
      <Header />
      <div className="container">
        <div className="item">
          <img src={custom1} alt="" />
        </div>
        <div className="item">
          <img src={custom2} alt="" />
        </div>
      </div>
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Customised Cake")}</h1>
          <h2>{t("Price")}</h2>
        </div>

        <div className="br"></div>

        <div className="items-dis">
          {items.map((item) => (
            <div key={item.id} className="item-dis cos-cake">
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
