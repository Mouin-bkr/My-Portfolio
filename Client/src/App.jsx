import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";

const App = () => {
  useEffect(() => {
    axios.get("/api/test").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Services />
      <Contact />
      <Footer />
      <FloatingNav />
    </div>
  );
};

export default App;
