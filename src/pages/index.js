import React from "react"
import MainLayout from "../layouts/index"
import HeroWrapper from "../assets/styles/components/atoms/HeroWrapper"
import HeroTextWrapper from "../assets/styles/components/molecules/HeroTextWrapper"
import Heading from "../assets/styles/components/atoms/Heading"
import Paragraph from "../assets/styles/components/atoms/Paragraph"

const IndexPage = ({ data }) => {
  const {
    datoCmsIndexpage: { heroimage, name, description },
  } = data
  return (
    <MainLayout>
      <HeroWrapper left={"-10%"} fluid={heroimage.fluid} />
      <HeroTextWrapper>
        <Heading size={"8.5rem"}>{name}</Heading>
        <Paragraph size={"2rem"}>{description}</Paragraph>
      </HeroTextWrapper>
    </MainLayout>
  )
}

export const IndexQuery = graphql`
  {
    datoCmsIndexpage {
      heroimage {
        fluid(maxWidth: 700, maxHeight: 900) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      name
      description
    }
  }
`

export default IndexPage
