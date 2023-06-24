import { ThemeProvider } from "@mui/material";
import "./App.css";
import TopBar from "./components/design/TopBar";
import theme from "./components/utility/Theme";
import NavBar from "./components/design/NavBar";
import Header from "./components/design/Header";
import StatisticBanner from "./components/design/StatisticBanner";
import ServiceHome from "./components/services/ServiceHome";
import Collection from "./components/special/Collection";
import ProductCampaign from "./components/special/ProductCampaign";
import NewsletterBanner from "./components/design/NewsletterBanner";
import Blog from "./components/special/Blog";
import Contact from "./components/design/Contact";
import Other from "./components/special/Other";
import Footer from "./components/design/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="headerBackground">
        <TopBar />
        <NavBar />
        <Header />
        <StatisticBanner />
        <ServiceHome />
        <Collection />
        <ProductCampaign />
        <NewsletterBanner />
        <Blog />
        <Contact />
        <Other />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
