import styled from "styled-components";

export const MainLayoutWrapper = styled.div<{ $collapsed?: boolean }>`
  display: flex;
  min-height: 100vh;
  background-color: #f0f2f5;

  .sidebar-container {
    position: relative;
    width: ${(props) => (props.$collapsed ? "80px" : "240px")};
    transition: width 0.3s ease;
    flex-shrink: 0;
  }

  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: calc(100% - ${(props) => (props.$collapsed ? "80px" : "240px")});
    transition: width 0.3s ease;
  }

  .content-wrapper {
    flex: 1;
    padding: 24px;
    overflow: auto;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 16px;
      color: #001529;
    }

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      margin-bottom: 16px;
      line-height: 1.5;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background-color: #f9f9f9;
    color: #666;
    font-size: 14px;
    border-top: 1px solid #e8e8e8;
  }

  @media (max-width: 768px) {
    .sidebar-container {
      position: fixed;
      z-index: 1001;
      height: 100vh;
      left: ${(props) => (props.$collapsed ? "-240px" : "0")};
      width: 240px;
    }

    .main-container {
      width: 100%;
      margin-left: 0;
    }

    .content-wrapper {
      padding: 16px;
    }
  }
`;
