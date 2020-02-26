import styled from "styled-components"

const Heading = styled.p`
  font-size: ${({ theme, size }) => (size ? size : theme.sizes.lg)};
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  font-weight: 700;
`

export default Heading
