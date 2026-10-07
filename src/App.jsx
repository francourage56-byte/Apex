import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import CodeShowcase from "./components/CodeShowcase ";
import SystemMetrics from "./components/SystemMetrics";
import TechSpaceGrid from "./components/TechSpecGrid";
import PricingGrid from "./components/PricingGrid";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#090d16] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <CodeShowcase />
        <SystemMetrics />
        <TechSpaceGrid />
        <PricingGrid />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
export default App;
