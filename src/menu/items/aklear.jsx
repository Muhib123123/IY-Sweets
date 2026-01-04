import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
function Aklear() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <title>IY-Éclair</title>
      <Header />
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Éclair")}</h1>
          <h2>{t("Price")}</h2>
        </div>

        <div className="br"></div>

        <div className="items-dis">
          <div className="item-dis">
            <p>{t("One piece")}</p>
            <p>25₺</p>
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

export default Aklear;
