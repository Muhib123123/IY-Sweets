import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import mini1 from "../../assets/mini1.jpeg";
import mini2 from "../../assets/mini2.jpeg";

export default function MiniCake() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <title>IY-Mini-Cake</title>
      <Header />
      <div className="container">
        <div className="item">
          <img src={mini1} alt="" />
        </div>
        <div className="item">
          <img src={mini2} alt="" />
        </div>
      </div>
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Mini Cakes")}</h1>
          <h2>{t("Price")}</h2>
        </div>

        <div className="br"></div>

        <div className="items-dis">
          <div className="item-dis">
            <p>{t("Mini (1 person)")}</p>
            <p>150₺</p>
          </div>
          <div className="item-dis">
            <p>{t("Mini (2 - 4 persons)")}</p>
            <p>900₺ - 650₺</p>
          </div>
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
