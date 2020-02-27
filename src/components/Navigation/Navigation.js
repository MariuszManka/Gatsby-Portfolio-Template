import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  StyledLink,
  StyledNav,
  StyledLogo,
  LogoWrapper,
} from "./StyledNavigation"

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
  const [open, setOpen] = useState(false)
  const data = useStaticQuery(NavigationQuery)
  const {
    datoCmsNavigation: { options, logo },
  } = data
  return (
    <>
      <LogoWrapper>
        <Link to="/">
          <StyledLogo fixed={logo.fixed} />
        </Link>
      </LogoWrapper>

      <StyledNav active={open}>
        {options.map(item => {
          return (
            <div key={item.id}>
              <li>
                <StyledLink
                  activeClassName="active"
                  active={open}
                  to={item.slug}
                >
                  {item.option}
                </StyledLink>
              </li>
            </div>
          )
        })}

        {/* <Hamburger active={open} onClick={() => setOpen(!open)}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Hamburger> */}
      </StyledNav>
    </>
  )
}

export default Navigation
