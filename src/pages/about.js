import React from "react"
import MainLayout from "../layouts/index"
import Heading from "../assets/styles/components/atoms/Heading"
import StyledAboutContent from "../assets/styles/components/custom/StyledAboutContent"
import Line from "../assets/styles/components/atoms/Line"
import StyledAboutParagraph from "../assets/styles/components/custom/StyledAboutParagraph"
import StyledAboutLine from "../assets/styles/components/custom/StyledAboutLine"

const AboutPage = ({ data }) => {
  const {
    datoCmsAbout: { id, heading, subheading, content },
  } = data

  return (
    <MainLayout>
      <StyledAboutContent>
        <StyledAboutLine right={"0"} bottom={"0"} secondaryColor />
        <StyledAboutLine right={"0"} bottom={"0"} width="150px" height="2px" />
        <Heading capitalize size={"calc(4rem + 1vw)"}>
          {heading}
        </Heading>
        {/* <Heading secondaryColor size={"calc(1rem + 1vw)"}>
          {subheading}
        </Heading> */}
        <Line width="50%" secondaryColor />
        {content.map(item => {
          return (
            <StyledAboutParagraph key={item.id}>
              {item.content}
            </StyledAboutParagraph>
          )
        })}
        <StyledAboutLine left={"0"} top={"0"} />
        <StyledAboutLine
          left={"0"}
          top={"0"}
          width="150px"
          height="2px"
          secondaryColor
        />
      </StyledAboutContent>
    </MainLayout>
  )
}

export const query = graphql`
  {
    datoCmsAbout {
      id
      heading
      subheading
      content {
        content
      }
    }
  }
`

export default AboutPage
