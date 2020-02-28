import styled from "styled-components"

const Line = styled.div`
  height: ${({ height }) => (height ? height : "3px")};
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ width }) => (width ? width : "100%")};
  background-color: ${({ theme, secondaryColor }) =>
    secondaryColor ? theme.colors.gold : theme.colors.white};
  margin: 0 auto;
`
export default Line
