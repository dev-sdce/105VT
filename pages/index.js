import { Button, Layout } from "antd";
import Introduction from "../components/introduction";
import Provider from "../locales/provider";
import { LOCALES } from "../locales/locales";
import { useStore } from "../store/Store";
const { Header, Content } = Layout;

export default function Home() {
  const [state]=useStore();
  const {isLanguageEnglish}=state;
  return (
    <Provider locale={isLanguageEnglish ? LOCALES.ENGLISH : LOCALES.CHINESE}>
      <Layout className="home-page-layout">
        <Header className="home-page-header">
          <Introduction />
        </Header>
        <Content className="home-page-content"></Content>
      </Layout>
    </Provider>
  );
}
