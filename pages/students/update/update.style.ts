import styled from "styled-components";

const highlightColor = "#bc8e5b";

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  margin-top: 16px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1.5px solid ${highlightColor};
  /* outline: ${highlightColor}; */
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: ${highlightColor};
    box-shadow: 0 0 0 2px rgba(188, 142, 91, 0.2);
  }
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1.5px solid ${highlightColor};
  border-radius: 4px;
  outline: none;
  background: #fff;
  &:focus {
    border-color: ${highlightColor};
    box-shadow: 0 0 0 2px rgba(188, 142, 91, 0.2);
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 12px;
  font-size: 16px;
  background: transparent;
  color: ${highlightColor};
  border: 2px solid ${highlightColor};
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${highlightColor};
    color: white;
  }
`;
