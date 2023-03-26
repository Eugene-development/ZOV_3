import "../globals.css";
import Banner from "./module/components/Banner";
import Header from "./module/components/Header";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Banner/>
        {/* <Menu /> */}
        <Header />
          {children}
        <p>Footer</p>
      </body>
    </html>
  );
}
