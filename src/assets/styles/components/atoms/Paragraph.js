import styled from "styled-components"

const Paragraph = styled.p`
  font-size: ${({ theme, size }) => (size ? size : theme.sizes.md)};
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  text-transform: ${({ capitalize }) =>
    capitalize ? "capitalize" : "lowercase"};
`

export default Paragraph
