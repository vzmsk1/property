import "@/assets/styles/globals.css";
import Footer from "@/components/footer.component";
import Navbar from "@/components/navbar.component";
import type { ReactNode } from "react";

export const metadata = {
  title: "property pulse | find the perfect rental",
  description: "find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
