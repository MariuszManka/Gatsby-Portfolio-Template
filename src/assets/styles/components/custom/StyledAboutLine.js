import styled from "styled-components"

const StyledAboutLine = styled.div`
  position: absolute;
  height: ${({ height }) => (height ? height : "100px")};
  width: ${({ width }) => (width ? width : "2px")};
  background-color: ${({ theme }) => theme.colors.gold};

  top: ${({ top }) => (top ? top : "")};
  right: ${({ right }) => (right ? right : "")};
  bottom: ${({ bottom }) => (bottom ? bottom : "")};
  left: ${({ left }) => (left ? left : "")};
`

export default StyledAboutLine
