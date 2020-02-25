import React from "react"
import MainLayout from "../layouts/index"
import HeroWrapper from "../components/Atoms/HeroWrapper"

const IndexPage = ({ data }) => {
  const {
    datoCmsIndexpage: { heroimage },
  } = data
  return (
    <MainLayout>
      <HeroWrapper left={"-10%"} fluid={heroimage.fluid} />
    </MainLayout>
  )
}

export const IndexQuery = graphql`
  {
    datoCmsIndexpage {
      heroimage {
        fluid(maxWidth: 400, maxHeight: 900) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      name
      id
      description
    }
  }
`

export default IndexPage
