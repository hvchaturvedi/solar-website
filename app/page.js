import Hero from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "@/app/components/ServicesSection";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import ContactSection from "@/app/components/ContactSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import SavingsTable from "@/app/components/SavingsTable";
import TestimonialsSection from "@/app/components/TestimonialsSection";
export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <ContactSection />
      <SavingsTable/>
      <TestimonialsSection />
    </main>
  );
}
