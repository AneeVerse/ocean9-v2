import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EquipmentSection from "@/components/EquipmentSection";

export const metadata = {
  title: "Equipment | Ocean 9",
  description:
    "We specialize in providing high-grade commercial and offshore underwater diving equipment designed to meet rigorous industry safety standards.",
};

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Main Content: Pure white background, starting directly below fixed Navbar without any dark header */}
      <main className="flex-1 bg-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">
        <EquipmentSection />
      </main>

      {/* Footer with dark navy ocean background */}
      <div className="bg-[#000b20] text-white relative z-30">
        <Footer />
      </div>
    </div>
  );
}
