import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import PlatformCards from "@/components/PlatformCards";
import WhyJasper from "@/components/WhyJasper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <PlatformCards />
        <WhyJasper />
      </main>
      <Footer />
    </div>
  );
}