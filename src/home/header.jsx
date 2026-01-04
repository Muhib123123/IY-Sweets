import { Link } from "react-router";
import "./header.css";
import pic2 from "../assets/logo.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={pic2} alt="" />
      </Link>

      <Link to="/menu">{t("Show the menu")}</Link>

      <select
        className="lang"
        value={i18n.language}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
        style={i18n.language === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
>
        <option value="ar">{t("Arabic")} 🇸🇦</option>
        <option value="en">{t("English")} 🇬🇧</option>
        <option value="tr">{t("Turkish")} 🇹🇷</option>
      </select>
    </div>
  );
}

export default Header;
