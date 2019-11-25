import React from 'react';
import { InputContainer } from './InputStyle';

const Input = (props)=> {
  return (
    <InputContainer
      type={props.type}
      name={props.name}
      placeholder={props.name}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      style={{border: props.error? '1px solid red' : 'none' }}
    />
  );
}

export default Input
