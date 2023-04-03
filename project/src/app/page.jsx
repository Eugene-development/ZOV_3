import Hero from "./z-module/components/Hero";
import Brand from "./z-module/components/Brand";
import Testimonials from "./z-module/components/Testimonials";
import ExampleFurniture from "./z-module/components/ExampleFurniture";
export default async function Home() {
  return (
    <>
    <Hero/>
    <Brand/>
    <ExampleFurniture/>
    <Testimonials/>
      <h1 className="font-serif text-3xl font-bold underline text-red-800 pl-8">
        Home
      </h1>
    </>
  );
}
