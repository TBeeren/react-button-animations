import styled from "styled-components"

export default styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;

  &:active {
    color: inherit;
  }

  &:focus {
    outline: 1px solid peachpuff;
    outline-offset: 1px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`
