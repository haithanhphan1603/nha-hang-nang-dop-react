import React from "react";
import Hero from "../components/Hero";
import HowItWork from "../components/HowItWork";
import Meals from "../components/Meals";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";
import CallToAction from "../components/CallToAction";
const Main = () => {
  return (
    <div>
      <Hero />
      <HowItWork />
      <Meals />
      <Testimonials />
      <Menu />
      <Location />
      <CallToAction />
    </div>
  );
};

export default Main;
