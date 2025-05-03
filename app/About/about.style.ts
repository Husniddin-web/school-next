import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding: 2rem 0;
  background-color: #f8f9fa;
  min-height: 100vh;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;

    h1 {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #7f8c8d;
    }
  }

  .section {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.8rem;
      color: #3498db;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e0e0e0;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #34495e;
    }
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;

    .feature {
      background-color: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      h3 {
        font-size: 1.3rem;
        color: #2980b9;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        color: #576574;
      }
    }
  }

  .benefits {
    padding-left: 1.5rem;

    li {
      font-size: 1.1rem;
      color: #34495e;
      margin-bottom: 0.8rem;
      position: relative;

      &::before {
        content: "✓";
        color: #27ae60;
        position: absolute;
        left: -1.5rem;
        font-weight: bold;
      }
    }
  }

  .contact {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .contact-info {
      margin-top: 1.5rem;

      p {
        margin-bottom: 0.5rem;
      }

      strong {
        color: #2980b9;
      }
    }
  }

  @media (max-width: 768px) {
    .header h1 {
      font-size: 2rem;
    }

    .features {
      grid-template-columns: 1fr;
    }
  }
`;
