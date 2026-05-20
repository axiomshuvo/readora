import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

export default function MainLayout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
    </>
  );
}
