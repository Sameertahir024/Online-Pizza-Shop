import "./App.css";
import AppStore from "./components/appstore/AppStore";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
