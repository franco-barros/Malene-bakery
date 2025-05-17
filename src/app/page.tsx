"use client";
import Hero from "../components/hero";
import About from "../components/about";
import Features from "../components/features";
import WhatsappButton from "../components/whatsappbutton";
import Service from "../components/service";
import TopDesserts from "../components/topdesserts";
import Courses from "../components/courses";
import Gallery from "../components/gallery";
import Team from "../components/team";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";
import Promotions from "../components/promotions";
import Location from "../components/location";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <TopDesserts />
      <Gallery />
      <About />
      <Promotions />
      <Testimonials />
      <Courses />
      <Team />
      <Location />
      <Service />
      <WhatsappButton phoneNumber="264587889872" />
    </>
  );
}
