import React, { FC } from "react";
import { SelectWrapper } from "./Select.styled";
import { SelectProps } from "./types";

const Select: FC<SelectProps> = ({ options = [], onChange }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <SelectWrapper>
      <select required className="form-select" onChange={handleSelectChange}>
        {options.map((opt: any) => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
};

export default Select;
