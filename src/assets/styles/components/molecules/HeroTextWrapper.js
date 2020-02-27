import styled from "styled-components"

const HeroTextWrapper = styled.div`
  position: absolute;
  z-index: 5;
  right: 8%;
  bottom: 35%;
  line-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 700px) {
    & p:first-of-type {
      white-space: normal;
      line-height: 1.5;
      text-align: center;
      font-size: calc(5rem - 1vw);
    }

    & p:last-of-type {
      display: none;
    }

    & {
      bottom: 0;
    }
  }
`

export default HeroTextWrapper
