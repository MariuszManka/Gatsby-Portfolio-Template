import styled from "styled-components"

const Heading = styled.h1`
  font-weight: 700;
  font-size: ${({ theme, size }) => (size ? size : theme.sizes.lg)};
  color: ${({ theme, secondaryColor }) =>
    secondaryColor ? theme.colors.gold : theme.colors.white};
  text-transform: ${({ capitalize }) =>
    capitalize ? "capitalize" : "lowercase"};
`

export default Heading
