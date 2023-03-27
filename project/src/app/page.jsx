import Hero from "./module/components/Hero";
import Testimonials from "./module/components/Testimonials";
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
