import styled from "styled-components"
import theme from "../../global/theme"

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme, background }) =>
    background ? background : theme.colors.dark};
`

export default Wrapper
