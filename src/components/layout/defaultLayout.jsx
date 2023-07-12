import Footer from "../common/footer";
import Navbar from "../common/navbar";

export default function DefaultLayout({ children }) {
  return (
    <div className="w-full">
      <>
        <Navbar />
      </>
      <main>{children}</main>
      <>
        <Footer />
      </>
    </div>
  );
}
