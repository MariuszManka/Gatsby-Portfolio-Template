import styled from "styled-components"
import Paragraph from "../atoms/Paragraph"

const StyledAboutParagraph = styled(Paragraph)`
  /* text-align: justify; */
  color: ${({ theme, secondaryColor }) =>
    secondaryColor ? theme.colors.gold : theme.colors.white};
  margin: 50px 0;
  &::first-letter {
    text-transform: capitalize;
  }
`

export default StyledAboutParagraph
