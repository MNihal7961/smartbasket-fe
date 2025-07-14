import React, { type ReactNode } from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="main-layout-container">
      <Header />
      <section className="main-layout-content">
        <div className="max-w-screen-xl mx-auto p-4">
          {children}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
