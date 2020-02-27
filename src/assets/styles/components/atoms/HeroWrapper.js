import Image from "gatsby-image"
import styled from "styled-components"

const HeroWrapper = styled(Image)`
  height: 100vh;
  overflow: hidden;
  object-fit: cover;
  grid-area: hero;
  min-width: 500px;
  position: relative;
  z-index: 2 !important;
`
export default HeroWrapper
