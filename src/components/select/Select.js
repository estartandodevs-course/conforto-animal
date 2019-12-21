import React from "react";
import SelectContainer from "./SelectStyle";

const Select = props => {
  return (
    <SelectContainer
      type={props.type}
      name={props.name}
      placeholder={props.placeholder || props.name}
      onChange={props.action}
      onBlur={props.onBlur}
      value={props.value}
      style={{ border: props.error && "1px solid red" }}
    >
      {props.options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.name}
        </option>
      ))}
    </SelectContainer>
  );
};

export default Select;
