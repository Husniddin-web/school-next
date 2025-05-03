import React, { FC, useState } from "react";
import { MainLayoutWrapper } from "./MainLayout.styles";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <MainLayoutWrapper $collapsed={sidebarCollapsed}>
      <div className="sidebar-container">
        <Sidebar collapsed={sidebarCollapsed} />
      </div>
      <div className="main-container">
        <Navbar
          onToggleSidebar={toggleSidebar}
          sidebarCollapsed={sidebarCollapsed}
        />
        <div className="content-wrapper">{children}</div>
        <footer className="footer">
          <div>© {new Date().getFullYear()} School ERP System</div>
        </footer>
      </div>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
