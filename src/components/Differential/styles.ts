import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  max-width: calc(1136px + 3rem);

  .title {
    padding-bottom: 2rem;

    h2 {
      padding: 0 1.5rem;
      text-align: center;
      font-size: 2rem;
    }

    span {
      display: block;
      margin: 0 auto;
      width: 150px;
      height: 4px;
      border-radius: 4px;
      background: ${props => props.theme.secondary};
      margin-top: 1rem;
    }
  }

  .items {
    display: flex;
    margin: 0 0.75rem;
    flex-wrap: wrap;

    .item {
      flex: 1;
      flex-basis: 280px;
      padding: 1rem;
      background: ${props => props.theme.container};
      margin: 0.75rem;
      border-radius: 8px;

      h2 {
        font-size: 3rem;
        text-align: right;
        color: ${props => transparentize(0.8, props.theme.primary)};
      }

      h3 {
        font-size: 1.2rem;
        font-weight: 900;
        letter-spacing: -0.5px;
        text-align: initial;
      }

      p {
        margin-top: 1rem;
        color: ${props => transparentize(0.2, props.theme.primary)};
      }
    }
  }

  @media (max-width: 768px) {
    .title {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
