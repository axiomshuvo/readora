import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import TopBar from "@/components/shared/TopBar";

export default function MainLayout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
