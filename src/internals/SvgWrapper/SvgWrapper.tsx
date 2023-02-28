import styled from "styled-components"

const SvgWrapper = styled.svg`
  display: block;
  overflow: ${(props: { hideOverflow: Boolean }) =>
    props.hideOverflow ? "hidden" : "visible"};
  backface-visibility: hidden;
  fill: none;
`
export default SvgWrapper
