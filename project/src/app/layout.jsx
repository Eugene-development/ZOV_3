import "../globals.css";
import Banner from "./module/components/Header/Banner";
import Header from "./module/components/Header";
import Footer from "./module/components/Footer";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//Как можно оптимизировать код, написанный с 11 по 23 строчки ниже?
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Banner/>
        {/* <Menu /> */}
        <Header />
          {children}
        <Footer/>
      </body>
    </html>
  );
}

