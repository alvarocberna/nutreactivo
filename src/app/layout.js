import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../style.scss';
import InstallBoostrap from "../shared/components/install-bootstrap";
import Navbar from "@/shared/components/navbar";
import Footer from "@/shared/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nutreactivo - Nutrición deportiva Viña del Mar",
  description: "Nutricionista deportivo especializado en ejercicio, rendimiento y salud. Atenciones en Viña del Mar, Valparaíso y Online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <div className="navbarSpacerSty"></div>
        {children}
        <Footer />
      </body>
      <InstallBoostrap />
    </html>
  );
}
