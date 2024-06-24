import React from "react";
import Headingtitle from "../components/Headingtitle";
import Addressinfo from "../components/Addressinfo";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Headingtitle
        heading="Contact Us"
        description="Have questions ?Let us know how we can help! Whether you are looking to buy, sell or consign, Vintage Car Collector is here to help with your journey! We offer the best prices on the internet and are looking forward to providing with our excellent service!"
        image={require("../images/bk.jpg")}
      />
      <Addressinfo />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Contact;
