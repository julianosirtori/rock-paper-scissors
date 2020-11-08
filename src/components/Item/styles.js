import styled, { css } from 'styled-components'

const variants = {
  paper: css`
    border: 25px solid #5572f2;
    box-shadow: 0 0.7em 0 #2844bf;

    &:active{
      box-shadow: 0 0 0 #2844bf;
    }

  `,
  rock: css`
    border: 25px solid #de3f5b;
    box-shadow: 0 0.7em 0 #9f1232;

    &:active{
      box-shadow: 0 0 0 #9f1232;
    }
  `,
  scissors: css`
    border: 25px solid #eba722;
    box-shadow: 0 0.7em 0 #c76c1b;

    &:active{
      box-shadow: 0 0 0 #c76c1b;
    }
  `
}

export const Container = styled.div`
  background: #fff;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  ${({ variant }) => variants[variant || 'paper']};

  &:hover{
    cursor: pointer;
  }

  &:active{
    box-shadow: 0 0 0 #2844bf;
    transform: translateY(0.7em);
  }

  img{
    border-radius: 50%;
  }
`
