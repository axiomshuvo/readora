import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import TopBar from "@/components/shared/TopBar";

export default function LogRegLayout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
