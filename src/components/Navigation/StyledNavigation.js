import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

export const StyledNav = styled.nav`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: transparent;
  list-style-type: none;
`

export const StyledLink = styled(Link)`
  padding: 5px 10px;
  margin: 8px;
  position: relative;
  font-size: ${({ theme }) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 4s linear;

  &::before {
    transition: 300ms;
    height: 2px;
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.gold};
    width: 0%;
    bottom: 0;
  }

  &:hover {
    &::before {
      width: 70%;
    }
  }

  &.active {
    &::before {
      width: 70%;
    }
  }
`

export const StyledLogo = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  cursor: pointer;
`
