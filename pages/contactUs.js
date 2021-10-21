import { Button, Layout } from "antd";
import Provider from "../locales/provider";
import { LOCALES } from "../locales/locales";
import { useStore } from "../store/Store";
import  ContactForm  from "../components/contactForm";

const { Header, Content } = Layout;

export default function ContactUs() {
  const [state] = useStore();
  const { isLanguageEnglish } = state;
  return (
    <Provider locale={isLanguageEnglish ? LOCALES.ENGLISH : LOCALES.CHINESE}>
      <Layout className="contactUs-page-layout">
        <Header className="contactUs-page-header"></Header>
        <Content className="contactUs-page-content">
          <div className="left-part">
            <div className="slogan">
              <span>Contact Us</span>
            </div>
            <div className="left-info-wrapper">
              <div className="our-address">
                <span className="title">Our address</span>
                <span className="content">SUITE 805 , 56 PITT STREET , SYDNEY NSW 2000</span>
              </div>
              <div className="our-email">
                <span className="title">Our email</span>
                <span className="content">info@vault-top.com.au</span>
              </div>
            </div>
          </div>
          <div className="right-part">
            <ContactForm />
          </div>
        </Content>
      </Layout>
    </Provider>
  );
}
