import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

export const StyledNav = styled.nav`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: transparent;
  list-style-type: none;
  z-index: 100;
`

export const StyledLink = styled(Link)`
  padding: 5px 10px;
  margin: 8px;
  position: relative;
  font-size: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 4s linear;
  z-index: 100;

  &::before {
    transition: 300ms;
    height: 2px;
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.gold};
    width: 0%;
    bottom: -3px;
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
  top: 10px;
  left: 15px;
  cursor: pointer;
`
