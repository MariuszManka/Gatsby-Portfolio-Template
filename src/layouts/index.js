import React from "react"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/global/globalStyle"
import { ThemeProvider } from "styled-components"
import theme from "../assets/styles/global/theme"
import Wrapper from "../assets/styles/components/templates/Wrapper"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navigation />
        {children}
      </Wrapper>
    </ThemeProvider>
  </>
)

export default MainLayout
