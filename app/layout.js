import "./globals.css";
import Navbar from "@/app/components/Navbar";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Footer from "@/app/components/Footer";


export const metadata = {
  title: {
    default: "Krishna Solar Energy | Rooftop Solar in Ganj Basoda",
    template: "%s | Krishna Solar Energy",
  },
  description:
    "Krishna Solar Energy provides reliable rooftop solar installation services in Ganj Basoda, Vidisha and nearby areas of Madhya Pradesh. Save up to 90% on electricity bills with government-approved solar systems.",
  keywords: [
    "solar panels Ganj Basoda",
    "solar installation Vidisha",
    "rooftop solar Madhya Pradesh",
    "Krishna Solar Energy",
    "solar subsidy MP",
  ],
};
export const openGraph = {
  title: "Krishna Solar Energy",
  description:
    "Trusted solar installation services in Ganj Basoda & Vidisha. Save up to 90% on electricity bills.",
  url: "https://krishnasolarenergy.in",
  siteName: "Krishna Solar Energy",
  locale: "en_IN",
  type: "website",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsAppButton /> 
        <Footer />
      </body>
    </html>
  );
}
