import React from 'react';
import { InputContainer } from './InputStyle';

const Input = (props)=> {
  return (
    <InputContainer
      type={props.type}
      name={props.name}
      placeholder={props.name}
      onChange={props.action}
      onBlur={props.onBlur}
      value={props.value}
      style={{border: props.error && '1px solid red'}}
    />
  );
}

export default Input
