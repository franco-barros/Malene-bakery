// app/page.tsx
"use client";

import About from "../components/about";
import Courses from "../components/courses";
import Features from "../components/features";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Location from "../components/location";
import Pricing from "../components/pricing";
import Promotions from "../components/promotions";
import Service from "../components/service";
import Team from "../components/team";
import Testimonials from "../components/testimonials";
import TopDesserts from "../components/topdesserts";
import WhatsappButton from "../components/whatsappbutton";

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
      <Service />
      <Location />
      <WhatsappButton phoneNumber="264587889872" />
    </>
  );
}
