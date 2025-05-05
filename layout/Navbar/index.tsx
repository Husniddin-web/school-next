"use client";
import { useState } from "react";
import { NavbarWrapper } from "./Navbar.styles";
import { usePathname } from "next/navigation";
import {
  Bell,
  CircleUserRound,
  ChevronDown,
  LogOut,
  Settings,
  User,
  Menu,
} from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  onToggleSidebar?: () => void;
  sidebarCollapsed?: boolean;
}

const Navbar = ({ onToggleSidebar, sidebarCollapsed }: NavbarProps) => {
  const pathname = usePathname() || "/";
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const titleMap: Record<string, string> = {
    "/": "Dashboard",
    "/students": "Students Management",
    "/teacher": "Teacher Management",
    "/about": "About",
    "/students/create": "Add New Student",
    "/students/update/": "Update Student",
    "/classes": "Classes Management",
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
    if (showNotifications) setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showProfileMenu) setShowProfileMenu(false);
  };

  return (
    <NavbarWrapper>
      <div className="left-section">
        <button className="menu-toggle" onClick={onToggleSidebar}>
          <Menu size={20} />
        </button>

        <div className="title-container">
          <div className="title-page">{titleMap[pathname] || "Page"}</div>
          <div className="breadcrumb">
            Home
            {pathname !== "/" && (
              <>
                <span className="separator">/</span>
                {titleMap[pathname]}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="actions">
        <div className="notification-container">
          <button className="notification-btn" onClick={toggleNotifications}>
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>

          {showNotifications && (
            <div className="dropdown-menu notification-menu">
              <h4>Notifications</h4>
              <div className="notification-item">
                <div className="notification-dot new"></div>
                <div className="notification-content">
                  <p>New student registration</p>
                  <span className="notification-time">2 minutes ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-dot new"></div>
                <div className="notification-content">
                  <p>Staff meeting reminder</p>
                  <span className="notification-time">1 hour ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-dot"></div>
                <div className="notification-content">
                  <p>System update completed</p>
                  <span className="notification-time">Yesterday</span>
                </div>
              </div>
              <Link href="/notifications" className="view-all">
                View all notifications
              </Link>
            </div>
          )}
        </div>

        <div className="profile-container">
          <button className="profile" onClick={toggleProfileMenu}>
            <CircleUserRound size={24} />
            <span className="profile-name">Admin User</span>
            <ChevronDown
              size={16}
              className={`chevron ${showProfileMenu ? "open" : ""}`}
            />
          </button>

          {showProfileMenu && (
            <div className="dropdown-menu profile-menu">
              <div className="menu-header">
                <CircleUserRound size={40} />
                <div>
                  <h4>Admin User</h4>
                  <p>admin@school.com</p>
                </div>
              </div>
              <div className="menu-items">
                <Link href="/profile" className="menu-item">
                  <User size={16} />
                  <span>My Profile</span>
                </Link>
                <Link href="/settings" className="menu-item">
                  <Settings size={16} />
                  <span>Settings</span>
                </Link>
                <button className="menu-item logout">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
