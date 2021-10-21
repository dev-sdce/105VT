import { Button, Layout } from "antd";
import Introduction from "../components/introduction";
import Provider from "../locales/provider";
import { LOCALES } from "../locales/locales";
import { useStore } from "../store/Store";

const { Header, Content } = Layout;

export default function AboutUs() {
  const [state] = useStore();
  const { isLanguageEnglish } = state;
  return (
    <Provider locale={isLanguageEnglish ? LOCALES.ENGLISH : LOCALES.CHINESE}>
      <Layout className="aboutUs-page-layout">
        <Header className="aboutUs-page-header"></Header>
        <Content className="aboutUs-page-content">
          <div className="left-part">
            <div className="slogan">
              <span>About Us</span>
            </div>
            <div className="left-info-wrapper">
              <p>
                Business coverage: Asia (China, Japan, Thailand, Malaysia,
                Singapore), North America (United States, Canada), Australia,
                Europe (Germany, France, Luxembourg), Africa (Kenya). Business
                sectors: Our business covers real estate, natural resources,
                technology, consumer goods and other fields. The Chinese market:
                Our service in China officially launched in the second half of
                2020, and 8 projects have been signed.
              </p>
              <p>
                An complete business division and positioning Complete business
                divisions to cover: Digital investment advisory: asset
                digitization business for issuers and investors. Key Assets
                management: We manage key assets according to our positioning
                within our broader ecosystem. Digital assets issuance and
                management platform: Our proprietary digital asset issuance and
                management platform to bring efficiency and trust to the
                fundraise process. Research Institution: Promoting the industry
                and providing integrated services for early-stage projects. A
                comprehensive global resource network We have a comprehensive,
                global network of investment institutions that provide
                investment services. These include family businesses, private
                funds, investment funds, high-net-worth individuals and digital
                funds.
              </p>
            </div>
          </div>
          <div className="right-part">
            <div className="our-story">
              <div>
                <span>Our Story</span>
              </div>
              <div className="info-wrapper">
                <p>
                  With origins in Sydney CBD, VAULT TOP is a pioneer in the
                  digital securities industry. Lead by a team that has a wealth
                  of project operation experience and a proven track record, we
                  are committed to providing One stop digital broker-dealer
                  services and support for both issuers and investors. Our core
                  services are:
                </p>
                <p>
                  Digital investment advisory: asset digitization business for
                  issuers and investors. Key Assets management: We manage key
                  assets according to our positioning within our broader
                  ecosystem. Digital assets issuance and management platform:
                  Our proprietary digital asset issuance and management platform
                  to bring efficiency and trust to the fundraise process.
                  Research Institution: Promoting the industry and providing
                  integrated services for early-stage projects.
                </p>
              </div>
            </div>
            <div className="our-team">
              <div>
                <span>Our team</span>
              </div>
              <div className="info-wrapper">
                <p>
                  Our team members come from international companies and
                  innovative enterprises. Hailing from Group of Eight and
                  investment banks in the financial industry, this team brings a
                  unique entrepreneurial spirit and rich experience in digital
                  finance and blockchain technology.
                </p>
              </div>
            </div>
            <div className="what-we-offer">
              <div>
                <span>What We Offer</span>
              </div>
              <div className="info-wrapper">
                <p>
                  One stop digital investment advisory services Our mission is
                  to help enterprises grow by facilitating every part of the
                  fundraise process, including asset digitization, legal
                  structuring, go-to-market planning & execution, and
                  fundraising & listing, to meet financing needs and improve
                  asset liquidity.
                </p>
                <p>
                  Key Assets management We manage key assets according to our
                  positioning within our broader ecosystem. including BTC
                  related mining assets, NFT&IP, New retailing and real estate
                  industry.
                </p>
                <p>
                  Digital assets issuance and management platform Our
                  proprietary digital asset issuance and management platform to
                  bring efficiency and trust to the fundraise process.
                </p>
                <p>
                  Research Institution Promoting the industry and providing
                  integrated services for early-stage projects.
                </p>
              </div>
            </div>
            <div className="why-us">
              <div>
                <span>Why us</span>
              </div>
              <div className="info-wrapper">
                <p>
                  An international professional team and compliant business
                  entity Our team brings a unique entrepreneurial spirit and
                  rich experience in digital finance and blockchain technology.
                  Team members are based in Australia and Mainland China. Our
                  service ecosystem has achieved a relatively complete
                  compliance structure: we can conduct the legal transfer of
                  assets and dividend distribution and provide custodian
                  services and private equity underwriting (Australia). A wealth
                  of operation experience and a proven track record
                </p>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Provider>
  );
}
