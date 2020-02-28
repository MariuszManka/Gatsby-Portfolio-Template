import React from "react"
import MainLayout from "../layouts/index"
import HeroTextWrapper from "../assets/styles/components/molecules/HeroTextWrapper"
import Heading from "../assets/styles/components/atoms/Heading"
import Paragraph from "../assets/styles/components/atoms/Paragraph"

const IndexPage = ({ data }) => {
  const {
    datoCmsIndexpage: { name, description },
  } = data
  return (
    <MainLayout>
      <HeroTextWrapper>
        <Heading capitalize size={"calc(6rem + 1vw)"}>
          {name}
        </Heading>
        <Paragraph size={"calc(1rem + 1vw)"}>{description}</Paragraph>
      </HeroTextWrapper>
    </MainLayout>
  )
}

export const IndexQuery = graphql`
  {
    datoCmsIndexpage {
      name
      description
    }
  }
`

export default IndexPage
