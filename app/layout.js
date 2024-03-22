import "./globals.css";
import Footer from "./components/footer-component";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
