import "./globals.css";
import Footer from "./components/footer-component";
import NavbarComponent from "./components/navbar-component";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import FloatingBtn from "./components/Floating-btn-component/FloatingBtn";
import FloatingMktBtn from "./components/Floating-mkt-component/FloatingMktBtn";

export const metadata = {
  title: 'PTGA',
  description: 'Cooperativa especializada en asesoramiento, investigación, fabricación y serviciosde instalación para el desarrollo de tecnología en telecomunicaciones',
  icons: {
    icon: '/icon.ico',
  }
};
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <NavbarComponent />
        <main>
          {children}
        </main>
        <FloatingBtn />
        <FloatingMktBtn />
        <Footer></Footer>
      </body>
    </html>
  );
}
