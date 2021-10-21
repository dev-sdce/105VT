import GlobalLayout from "../components/layout/globalLayout";
import Provider from "../locales/provider";
import { LOCALES } from "../locales/locales";
import { StoreProvider } from "../store/Store";
import { initialState, Reducer } from "../store/reducer";

const MyApp = ({ Component, pageProps }) => {
  const {isLanguageEnglish}=initialState;
  return (
    <Provider locale={isLanguageEnglish?LOCALES.ENGLISH:LOCALES.CHINESE}>
      <StoreProvider initialState={initialState} reducer={Reducer}>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </StoreProvider>
    </Provider>
  );
};
export default MyApp;
