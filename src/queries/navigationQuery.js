import { graphql } from "gatsby"

const navigationQuery = graphql`
  query navigationQuery {
    allDatoCmsNavigation {
      nodes {
        options {
          id
          option
          slug
        }
        logo {
          url
        }
      }
    }
  }
`

export default navigationQuery
