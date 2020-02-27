import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

export const StyledNav = styled.nav`
  /* width: 100vw; */
  display: flex;
  /* justify-content: end; */
  justify-items: center;
  align-items: center;
  background-color: transparent;
  list-style-type: none;
  z-index: 100;
  grid-area: nav;
  justify-self: center;
  background-color: transparent;

  ${({ active, theme }) =>
    active &&
    `
    flex-direction: column;
    height: 100vh;
    background-color: ${theme.colors.white};
  `};

  /* @media (max-width: 800px) {
  

  } */
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
  transition: all 0.4s linear;
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

  ${({ active, theme }) =>
    active &&
    `
     color: ${theme.colors.dark};
     font-size: ${theme.sizes.extralg};
  
  `}
`

export const StyledLogo = styled(Image)``

// export const Hamburger = styled.div`
//   /* position: absolute;
//   top: 30px;
//   right: 35px;
//   width: 40px;
//   height: 35px; */
//   z-index: 10;
//   cursor: pointer;
//   /* overflow: hidden; */

//   & span {
//     position: absolute;
//     width: 100%;
//     height: 4px;
//     background-color: ${({ theme }) => theme.colors.white};
//     border-radius: 20px;
//   }

//   & span:nth-child(1) {
//     top: 0;
//     left: 0;
//   }
//   & span:nth-child(2) {
//     top: 50%;
//     transform: translateY(-50%);
//     right: 0;
//     width: 65%;
//   }
//   & span:nth-child(3) {
//     bottom: 0;
//     right: 0;
//     width: 30%;
//   }

//   ${({ active, theme }) =>
//     active &&
//     `
//     & span{
//      background-color:  ${theme.colors.dark};
//     }

//     & span:nth-child(2) {
//       width: 100%;
//     }
//     & span:nth-child(3) {
//        width: 100%;
//     }

//   `}

//   @media(min-width: 800px) {
//     display: none;
//   }
// `
export const LogoWrapper = styled.div`
  width: 140px;
  position: absolute !important;
  top: 10px;
  left: 15px;
  z-index: 1;
  grid-area: hero;
  cursor: pointer;
  position: relative;
  z-index: 5;
`
