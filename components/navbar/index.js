import { Layout, Menu, Icon } from "antd";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { GlobalOutlined } from "@ant-design/icons";
import { changeLanguage } from "../../store/reducer";
import { useStore } from "../../store/Store";
import Provider from "../../locales/provider";
import { LOCALES } from "../../locales/locales";
import Image from "next/image";

const Navbar = () => {
  const [state, dispatch] = useStore();
  const {isLanguageEnglish}=state;
  const onChangeLanguange = () => {
    dispatch(changeLanguage());
  };
  return (
    <Provider locale={isLanguageEnglish ? LOCALES.ENGLISH : LOCALES.CHINESE}>
      <div className="nav-menu">
          <Image src='/logo.png' alt="logo" height="80px" width="200px"/>
        <div className="nav-buttons">
          <div className="nav-home">
            <Link href="/" passHref>
              <div style={{ cursor: "pointer" }}>
                <FormattedMessage id="nav.home" />
              </div>
            </Link>
          </div>
          <div>
            <Link href="/aboutUs" passHref>
              <div style={{ cursor: "pointer" }}>
                <FormattedMessage id="nav.aboutUs" />
              </div>
            </Link>
          </div>
          <div>
            <Link href="/contactUs" passHref>
              <div style={{ cursor: "pointer" }}>
                <FormattedMessage id="nav.contactUs" />
              </div>
            </Link>
          </div>
        </div>

        <div className="intl-button" onClick={onChangeLanguange}>
          <GlobalOutlined />
        </div>
      </div>
    </Provider>
  );
};
export default Navbar;
