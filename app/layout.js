import "./globals.css";
import Footer from "./components/footer-component";
import NavbarComponent from "./components/navbar-component";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import FloatingBtn from "./components/Floating-btn-component/FloatingBtn";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent />
        <main>
          {children}
        </main>
        <FloatingBtn/>
        <Footer></Footer>
      </body>
    </html>
  );
}
