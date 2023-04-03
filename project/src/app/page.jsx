import Hero from "./z-module/components/Hero";
import Testimonials from "./z-module/components/Testimonials";
export default async function Home() {
  return (
    <>
    <Hero/>
    <Testimonials/>
      <h1 className="font-serif text-3xl font-bold underline text-red-800 pl-8">
        Home
      </h1>
    </>
  );
}
