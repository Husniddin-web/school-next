import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 65px;
  background-color: #001529;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;

  .left-section {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .menu-toggle {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title-page {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .breadcrumb {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.65);

    .separator {
      margin: 0 5px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .notification-container,
  .profile-container {
    position: relative;
  }

  .notification-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .notification-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f5222d;
    color: white;
    font-size: 0.7rem;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .profile-name {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }

    .chevron {
      transition: transform 0.3s ease;

      &.open {
        transform: rotate(180deg);
      }
    }
  }

  .dropdown-menu {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 10px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    min-width: 250px;
    color: #333;
    z-index: 1000;

    &:before {
      content: "";
      position: absolute;
      top: -5px;
      right: 20px;
      width: 10px;
      height: 10px;
      background-color: white;
      transform: rotate(45deg);
    }
  }

  .profile-menu {
    padding: 0;

    .menu-header {
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid #f0f0f0;

      h4 {
        margin: 0;
        font-size: 1rem;
      }

      p {
        margin: 0;
        font-size: 0.8rem;
        color: #666;
      }
    }

    .menu-items {
      padding: 8px 0;
    }

    .menu-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      color: #333;
      text-decoration: none;
      transition: background-color 0.3s;
      cursor: pointer;
      border: none;
      background: none;
      width: 100%;
      text-align: left;
      font-size: 0.9rem;

      &:hover {
        background-color: #f5f5f5;
      }

      &.logout {
        color: #f5222d;
      }
    }
  }

  .notification-menu {
    padding: 16px;

    h4 {
      margin: 0 0 12px 0;
      font-size: 1rem;
    }

    .notification-item {
      display: flex;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;

      &:last-child {
        border-bottom: none;
      }
    }

    .notification-dot {
      width: 10px;
      height: 10px;
      background-color: #d9d9d9;
      border-radius: 50%;
      margin-top: 5px;

      &.new {
        background-color: #1890ff;
      }
    }

    .notification-content {
      flex: 1;

      p {
        margin: 0 0 4px 0;
        font-size: 0.9rem;
      }

      .notification-time {
        font-size: 0.8rem;
        color: #999;
      }
    }

    .view-all {
      display: block;
      text-align: center;
      padding: 8px 0 0;
      color: #1890ff;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 576px) {
    padding: 0 15px;

    .title-page {
      font-size: 1rem;
    }

    .actions {
      gap: 10px;
    }
  }
`;
