import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StyledLink, StyledNav, StyledLogo } from "./StyledNavigation"

const NavigationQuery = graphql`
  query NavigationQuery {
    datoCmsNavigation {
      options {
        option
        slug
        id
      }
      logo {
        fixed(width: 140) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
    }
  }
`

const Navigation = () => {
  const data = useStaticQuery(NavigationQuery)
  const {
    datoCmsNavigation: { options, logo },
  } = data
  return (
    <>
      <StyledNav>
        <Link to="/">
          <StyledLogo fixed={logo.fixed} />
        </Link>

        {options.map(item => {
          return (
            <>
              <li key={item.id}>
                <StyledLink activeClassName="active" to={item.slug}>
                  {item.option}
                </StyledLink>
              </li>
            </>
          )
        })}
      </StyledNav>
    </>
  )
}

export default Navigation
