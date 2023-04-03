import Hero from "./z-module/components/Hero";
import Brand from "./z-module/components/Brand";
import Testimonials from "./z-module/components/Testimonials";
import ExampleFurniture from "./z-module/components/ExampleFurniture";
import Feature from "./z-module/components/Feature";

export default async function Home() {
  return (
    <>
      <Hero/>
      <Brand/>
      <ExampleFurniture/>
      <Feature/>
      <Testimonials/>
    </>
  );
}
