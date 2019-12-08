import styled from "styled-components";
import { lighten } from "polished";

const SelectContainer = styled.select`
  width: "286px";
  height: "19px";
  padding: 5px;
  border: 1px solid #c4c4c4;
  border-radius: 7px;
  &:focus {
    box-shadow: 0px 0px 10px ${lighten(0.35, "blue")};
    outline: none;
  }
`;

export default SelectContainer;
