import "../globals.css";
import Bunner from "./module/components/Banner";
import Menu from "./module/components/Menu";
import Catalog from "./module/components/Catalog";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Bunner/>
        <Menu />
        <Catalog />
          {children}
        <p>Footer</p>
      </body>
    </html>
  );
}
