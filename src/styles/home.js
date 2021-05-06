import styled from 'styled-components';

export const SectionHeroStyle = styled.section`
  position: relative;
  flex: 1;
  height: 808px;
  // margin-bottom: -70px;
  .container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .text {
    max-width: 519px;
    flex: 1;
    h1 {
      font-weight: 600;
      font-size: 3.625rem;
      line-height: 110%;
      color: #FFFFFF;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.125rem;
      line-height: 150%;
      letter-spacing: 0.02em;
      color: ${props => props.theme.secondGray};
      max-width: 491px;
      margin-bottom: 3rem;
    }
    a {
      display: block;
      line-height: 55px;
      width: 221px;
      background: ${props => props.theme.primaryBlue};
      text-align: center;
      border-radius: 300px;
      font-weight: 600;
      font-size: 1.375rem;
      letter-spacing: 0.02em;
      color: #FFFFFF;
      transition: background-color ease .3s;
      &:hover {
        background: #8299F5;
      }
    }
  }
  .hero {
    position: absolute;
    top: 32px;
    right: -100px;
    pointer-events: none;
  }
  @media(max-width: 1200px) {
    height: 670px;
    .hero {
      max-width: 700px;
      top: 0;
      right: 0;
    }
    .text {
      max-width: 470px;
    }
  }
  @media(max-width:  991px) {
    margin-top: 120px;
    padding: 1.875rem 0px;
    height: auto;
    padding-bottom: 0;
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
    .text {
      margin: 0 auto;
      max-width: 90%;
      h1 {
        text-align: center;
      }
      p {
        margin: 0 auto;
        text-align: center;
        margin-bottom: 30px;
      }
      a {
        margin: 0 auto;
      }
    }
    .hero {
      position: relative;
      right: 0;
      top: 0;
      max-width: 600px;
      left: 50%;
      margin-left: -325px;
    }
  }
  @media(max-width: 560px) {
    margin-top: 93px;
    .text {
      margin: 0 auto;
      max-width: 100%;
      h1 {
        font-size: 2.5rem;
        max-width: 327px;
        margin-bottom: 1.125rem;
      }
      p {
        font-size: 1rem;
        max-width: 303px;

      }
    }
    .hero {
      max-width: 400px;
      margin-left: -225px;
    }
  }
`;

export const SectionWhatStyle = styled.section`
  position: relative;
  margin-bottom: 5rem;
  &:after {
    content: "";
    max-width: 1216px;
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 0px;
    margin-left: -608px;
    border-top: 1px solid #fff;
    opacity: 0.05;
  }
  .container {
    display: flex;
  }
  .video {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 580px;
    height: 480px;
    &:hover {
      .play {
        .icon {
          transform: scale(1.05);
        }
        .txt-label {
          transform: rotate(180deg);
        }
      }
    }
    .play {
      position: relative;
      top: 90px;
      width: 198px;
      height: 200px;
      .icon {
        transition: transform ease .5s;
      }
      .txt-label {
        position: absolute;
        top: 0;
        left: 0;
        transition: transform ease .5s;
      }
    }
    .iframe {
      border-radius: 8px;
    }
  }
  .text {
    flex: 1;
    margin-left: 6.1875rem;
    max-width: 449px;
    margin-top: 97px;
    p {
      font-size: 1.375rem;
      line-height: 140%;
      letter-spacing: 0.01em;
      color: #FFFFFF;
    }
  }
  @media(max-width: 991px) {
    padding-top: 0px;
    margin-bottom: 0;
    .container {
      flex-direction: column-reverse;
      align-items: center;
    }
    .text {
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 40px;
      max-width: 90%;
      p {
        text-align: center;
      }
    }
    &:after  {
      max-width: 100%;
      width: 100%;
      left: 0;
      bottom: 0px;
      margin-left: 0;
    }
  }
  @media(max-width: 560px) {
    .text {
      margin: 0;
      margin-bottom: 55px;
      p {
        text-align: center;
        font-size: 1rem;
        max-width: 327px;
      }
    }
    .video {
      width: 100%;
      background-size: 464px;
      height: 288px;
      .play {
        width: 110px;
        height: 115px;
        top: 50px;
      }
    }
  }
`;

export const SectionSuccessStyle = styled.section`
  position:  relative;
  width: 100%;
  height: 46.625rem;
  overflow-x: hidden;
  .container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .image {
    position: absolute;
    left: -130px;
    top: -110px;
    pointer-events: none;
  }
  .text {
    flex: 1;
    max-width: 448px;
    p {
      margin-bottom: 1.25rem;
      font-weight: 300;
      font-size: 1rem;
      line-height: 140%;
      color: ${props => props.theme.secondGray};
    }
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 56px;
      &:hover {
        .txt {
          svg {
            path {
              stroke: #8299F5;
            }
          }
          strong {
            color: #8299F5;
          }
        }
      }
      .txt {
        display: flex;
        align-items: center;
        flex: 1;
        max-width: 365px;
        justify-content: space-between;
        svg {
          path {
            transition: stroke ease .3s;
          }
        }
        strong {
          max-width: 303px;
          font-weight: 500;
          font-size: 1rem;
          line-height: 120%;
          letter-spacing: 0.01em;
          color: #FFFFFF;
          transition: color ease .3s;
        }
      }
    }
  }
  @media(max-width: 991px) {
    height: auto;
    padding-bottom: 60px;
    .container {
      flex-direction: column;
      align-items: center;
    }
    .image {
      max-width: 600px;
      position: relative;
      left: 0;
      top: 0;
      margin-left: 0;
    }
    .text {
      max-width: 90%;
    }
  }
  @media(max-width: 560px) {
    padding-bottom: 50px;
    .image {
      max-width: 470px;
      margin-left: 20px;
      margin-top: -50px;
    }
    .text {
      max-width: 326px;
      p {
        text-align: center;
      }
      a {
        .txt {
          max-width: 261px;
          strong {
            max-width: 199px;
          }
        }
      }
    }
  }
`;

export const SectionFeaturesStyle = styled.section`
  h2 {
    font-weight: normal;
    font-size: 2.25rem;
    line-height: 140%;
    color: #FFFFFF;
    margin-bottom: 2rem;
  }
  .all {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    .card {
      background: ${props => props.theme.gradientDark};
      width: 100%;
      height: 23.5rem;
      border-radius: 8px;
      padding: 3.375rem 3rem;
      h3 {
        margin-top: 0.8125rem;
        max-width: 280px;
        font-weight: 400;
        font-size: 1.375rem;
        line-height: 140%;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        margin-bottom: 1rem;
      }
      p {
        font-weight: 300;
        font-size: 1rem;
        line-height: 140%;
        color: ${props => props.theme.secondGray};
      }
    }
  }
  @media(max-width: 991px) {
    padding-top: 50px;
    h2 {
      text-align: center;
    }
    .all {
      grid-template-columns: repeat(2,1fr);
    }
  }
  @media(max-width: 560px) {
    h2 {
      font-size: 1.75rem;
      margin-bottom: 20px;
      text-align: center;
    }
    .all {
      grid-template-columns: 1fr;
      .card {
        height: auto;
        padding: 50px 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:nth-child(3) {
          h3 {
            max-width: 280px;
          }
        }
        h3 {
          text-align: center;
          font-size: 1.125rem;
          max-width: 186px;
          margin-bottom: 8px;
        }
        p {
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
`;

export const TitleStyle = styled.h3`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 1.25rem;
  letter-spacing: 0.01em;
  color: #8299F5;
  margin-bottom: 24px;
  &:before {
    content: "";
    display: inline-block;
    width: 49px;
    border-top: 1px solid #8299F5;
    margin-right: 24px;
  }
  @media(max-width: 991px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
  @media(max-width: 560px) {
    font-size: 1rem;
  }
`;