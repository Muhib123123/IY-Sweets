import Header from "../../home/header";
import "./items.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import custom1 from "../../assets/custom1.jpeg";
import custom2 from "../../assets/custom2.jpeg";

export default function WholeCake() {
    const { t, i18n } = useTranslation();

  return (
    <>
      <title>IY-Custom-Cake</title>
      <Header />
      <div className="container">
        <div className="item">
          <img src={custom1} alt=""/>
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
        </div>

        <div className="br"></div>

        <div className="items-dis">
          <div className="item-dis cos-cake">
            <p>{t("According to size and design starts from 900₺")}</p>
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
