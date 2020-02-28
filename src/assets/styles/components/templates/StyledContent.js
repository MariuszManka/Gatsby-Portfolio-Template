import styled from "styled-components"

const StyledContent = styled.main`
  grid-area: content;
  background-color: transparent;
  place-self: center;
  color: ${({ theme }) => theme.colors.white};
  width: 50%;
  text-align: center;
`

export default StyledContent
