import styled from "styled-components";
import { lighten } from "polished";

export const InputContainer = styled.input`
  width: ${props => (props.type !== "textarea" ? "149px" : "286px")};
  height: ${props => (props.type !== "textarea" ? "19px" : "68px")};
  padding: 5px;
  border: 1px solid #c4c4c4;
  border-radius: 7px;
  background:transparent;
  &:focus {
    box-shadow: 0px 0px 10px ${lighten(0.35, "blue")};
    outline: none;
  }
`;
