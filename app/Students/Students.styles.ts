import styled from "styled-components";

export const StudentPageWrapper = styled.div`
  padding: 30px;

  .title-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StudentCreateWrapper = styled.div`
  padding: 30px;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .select-form {
    width: 100%;
    padding: 8px 10px;
    border-radius: 10px;
    outline-color: #bc8e5b;
  }
`;
