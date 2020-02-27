import React from "react"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/global/globalStyle"
import { ThemeProvider } from "styled-components"
import theme from "../assets/styles/global/theme"
import Wrapper from "../assets/styles/components/templates/Wrapper"
import HeroWrapper from "../assets/styles/components/atoms/HeroWrapper"
import { graphql, useStaticQuery } from "gatsby"
import StyledContent from "../assets/styles/components/templates/StyledContent"

export const HeroQuery = graphql`
  {
    datoCmsIndexpage {
      heroimage {
        fluid(maxWidth: 700, maxHeight: 1000) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

const MainLayout = ({ children }) => {
  const data = useStaticQuery(HeroQuery)

  const {
    datoCmsIndexpage: { heroimage },
  } = data

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Navigation />
          <HeroWrapper left={"-10%"} fluid={heroimage.fluid} />
          <StyledContent>{children}</StyledContent>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default MainLayout
