import Image from "gatsby-image"
import styled from "styled-components"

const HeroWrapper = styled(Image)`
  position: absolute !important;
  left: ${({ left }) => (left ? left : 0)};
  right: ${({ right }) => (right ? right : 0)};
  bottom: ${({ bottom }) => (bottom ? bottom : 0)};
  top: ${({ top }) => (top ? top : 0)};
  overflow: hidden;
  object-fit: cover;
`
export default HeroWrapper
