import { Footer } from "..";
import { Feature } from "./features/Feature";
import { Hero } from "./hero/Hero";
import { HowItWorks } from "./how it works/HowItWorks";

export const Body = () => {
  return (
    <section>
      <Hero />
      <Feature />
      <HowItWorks />
      <Footer />
    </section>
  );
};
