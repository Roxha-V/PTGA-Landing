import "./globals.css";
import Footer from "./components/footer-component";
import NavbarComponent from "./components/navbar-component";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
