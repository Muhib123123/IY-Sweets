import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import cupCake1 from "../../assets/cupCake1.jpeg";
import cupCake2 from "../../assets/cupCake2.jpeg";

export default function CupCake() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <title>IY-Cupcake</title>
      <Header />
      <div className="container">
        <div className="item">
          <img src={cupCake1} alt="" />
        </div>
        <div className="item">
          <img src={cupCake2} alt="" />
        </div>
      </div>
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Cupcakes")}</h1>
          <h2>{t("Price")}</h2>
        </div>

        <div className="br"></div>

        <div className="items-dis">
          <div className="item-dis">
            <p>{t("Cupcake (1 piece)")}</p>
            <p>50₺</p>
          </div>
          <div className="item-dis">
            <p>{t("Cupcake Bauquet (1 piece)")}</p>
            <p>75₺</p>
          </div>
          <div className="item-dis">
            <p>{t("Cupcake Bauquet (7 pieces)")}</p>
            <p>525₺</p>
          </div>
          <div className={`item-dis ${i18n.language === "ar" ? "cos-cup-ar" : "cos-cup"}`}>
            <p>{t("Cupcake Bauquet (more then 7 pieces) starts from 600₺")}</p>
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
