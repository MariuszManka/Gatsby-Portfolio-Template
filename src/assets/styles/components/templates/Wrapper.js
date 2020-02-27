import styled from "styled-components"
import theme from "../../global/theme"

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: "hero nav" "hero content";
  height: 100vh;
  overflow: hidden;
`

export default Wrapper
