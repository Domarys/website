import styled from 'styled-components';

export const SectionTitleBlogStyle = styled.section`
  .text {
    padding-top: 11.6875rem;
    max-width: 472px;
    h1 {
      font-weight: 600;
      font-size: 3.25rem;
      line-height: 4.9375rem;
      color: #ffffff;
      margin-bottom: 1rem;
    }
    p {
      font-weight: 300;
      font-size: 1rem;
      line-height: 140%;
      color: ${props => props.theme.secondGray};
      margin-bottom: 3.375rem;
    }
  }
`
export const SectionBlogStyle = styled.section`
  .all {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    grid-gap: 24px 33px;
  }
  @media(max-width: 1024px) {
    .all {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media(max-width: 560px) {
    padding-top: 129px;
    padding-bottom: 40px;
    .top {
      flex-direction: column;
      align-items: center;
      h1 {
        font-weight: 600;
        font-size: 2.25rem;
        line-height: 3.375rem;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 0.875rem;
      }
    }
    .all {
      grid-template-columns: 1fr;
    }
  }
`;

export const SectionNewsletterStyle = styled.section`
  margin-bottom: 3.6875rem;
`;
