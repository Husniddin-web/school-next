"use client";
import { SidebarWrapper } from "./Sidebar.styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  BookOpen,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

interface SidebarProps {
  collapsed?: boolean;
}

const Sidebar = ({ collapsed = false }: SidebarProps) => {
  const pathname = usePathname() || "/";

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Users, label: "Students", path: "/students" },
    { icon: GraduationCap, label: "Teacher", path: "/teacher" },
    { icon: BookOpen, label: "Classes", path: "/classes" },
    { icon: FileText, label: "Reports", path: "/about" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <SidebarWrapper $collapsed={collapsed}>
      <div className="logo">
        <Link href="/">
          {collapsed ? (
            <span className="logo-icon">S</span>
          ) : (
            <span className="logo-text">School ERP</span>
          )}
        </Link>
      </div>

      <div className="menu-items">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.path || pathname.startsWith(`${item.path}/`);
          return (
            <Link
              href={item.path}
              key={item.path}
              className={`menu-item ${isActive ? "active" : ""}`}
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && item.label === "Reports" && (
                <ChevronRight size={16} className="submenu-indicator" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="sidebar-footer">
        <button className="logout-button">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
