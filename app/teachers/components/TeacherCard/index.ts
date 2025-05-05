import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;

  .button-wrapper {
    display: flex;
    gap: 10px;
  }
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const BirthDate = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const ClassList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  font-size: 14px;
  color: #444;
`;

export const NoClasses = styled.p`
  font-size: 14px;
  color: #999;
`;

export const CardInfoWrapper = styled.div``;
