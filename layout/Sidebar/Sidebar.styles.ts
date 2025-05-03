import styled from "styled-components";

export const SidebarWrapper = styled.nav<{ $collapsed?: boolean }>`
  width: ${(props) => (props.$collapsed ? "80px" : "240px")};
  height: 100vh;
  background-color: #001529;
  color: white;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  z-index: 1001;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #00101f;
  }

  &::-webkit-scrollbar-thumb {
    background: #0e3052;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #1890ff;
  }

  .logo {
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.$collapsed ? "center" : "flex-start")};
    padding: ${(props) => (props.$collapsed ? "10px" : "10px 20px")};
    position: sticky;
    top: 0;
    background-color: #001529;
    z-index: 10;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    a {
      color: white;
      text-decoration: none;
      font-size: ${(props) => (props.$collapsed ? "1.5rem" : "1.2rem")};
      font-weight: 600;
    }

    .logo-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #1890ff;
      border-radius: 8px;
      font-weight: bold;
    }
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: ${(props) => (props.$collapsed ? "10px 5px" : "10px 15px")};
    flex: 1;
  }

  .menu-item {
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    padding: ${(props) => (props.$collapsed ? "12px" : "12px 15px")};
    border-radius: 6px;
    position: relative;
    justify-content: ${(props) => (props.$collapsed ? "center" : "flex-start")};

    span {
      margin-left: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .submenu-indicator {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.5;
    }
  }

  .menu-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }

  .menu-item.active {
    background-color: #1890ff;
    color: white;
  }

  .sidebar-footer {
    padding: ${(props) => (props.$collapsed ? "10px 5px" : "10px 15px")};
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: auto;
  }

  .logout-button {
    width: 100%;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.65);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.$collapsed ? "center" : "flex-start")};
    padding: ${(props) => (props.$collapsed ? "12px" : "12px 15px")};
    border-radius: 6px;
    transition: all 0.3s ease;

    span {
      margin-left: 12px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 240px;
    transform: ${(props) =>
      props.$collapsed ? "translateX(-100%)" : "translateX(0)"};
  }
`;
