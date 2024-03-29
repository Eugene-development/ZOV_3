
import Hero from "./z-module/components/Hero";
import Brand from "./z-module/components/Brand";
import Testimonials from "./z-module/components/Testimonials";
import ExampleFurniture from "./z-module/components/ExampleFurniture";
import Colors from "./z-module/components/Colors";
import Feature from "./z-module/components/Feature";
import Logo from "./z-module/components/Logo";
import Incentives from "./z-module/components/Incentives";
import Equipment from "./z-module/components/Equipment";
import Call from "./z-module/components/Call";


// export const metadata = {
//   title: 'Тест Тайтл',
//   description: 'овылтиджывьищывпльи',
// }

export async function generateMetadata({ params, searchParams }) {
  return { 
    title: 'Мебель ЗОВ',
    description: 'овылтиджывьищывпльи',
   };
}

export default async function Home() {
  return (
    <>
        <Hero/>
        <Brand/>
        <ExampleFurniture/>
        <Colors/>
        <Logo/>
        <Feature/>
        <Equipment/>
        {/* <Incentives/> */}
        <Testimonials/>
        <Call/>
    </>
  );
}
