import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickTiles from "@/components/QuickTiles";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Locations from "@/components/Locations";
import WhyUs from "@/components/WhyUs";
import ReportAccess from "@/components/ReportAccess";
import Packages from "@/components/Packages";
import BookForm from "@/components/BookForm";
import FAQ from "@/components/FAQ";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function HomePage() {
  return (
    <main className="min-h-screen pb-20 lg:pb-0">
      <Navbar />
      <Hero />
      <QuickTiles />
      <TrustStrip />
      <Services />
      <Locations />
      <WhyUs />
      <ReportAccess />
      <Packages />
      <BookForm />
      <FAQ />
      <Visit />
      <Footer />
      <MobileBar />
    </main>
  );
}
