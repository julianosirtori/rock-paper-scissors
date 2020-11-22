import styled, { css } from 'styled-components'

const colors = {
  paper: '#5572f2',
  paperDark: '#2844bf',
  rock: '#de3f5b',
  rockDark: '#9f1232',
  scissors: '#eba722',
  scissorsDark: '#c76c1b'
}

const sizes = {
  default: css`
    width: 200px;
    height: 200px;
    border: ${({ variant }) => `25px solid ${colors[variant]}`};

    @media only screen and (max-width: 600px) {
      width: 150px;
      height: 150px;
      border: ${({ variant }) => `20px solid ${colors[variant]}`};
    }

    @media only screen and (max-width: 400px) {
      width: 120px;
      height: 120px;
      border: ${({ variant }) => `15px solid ${colors[variant]}`};

      img{
        width: 40px; 
      }
    }

  `,
  big: css`
    width: 400px;
    height: 400px;
    border: ${({ variant }) => `50px solid ${colors[variant]}`};

    img{
      width: 100px; 
    }

    @media only screen and (max-width: 1360px) {
      width: 300px;
      height: 300px;
      border: ${({ variant }) => `35px solid ${colors[variant]}`};

      ${({ win }) => win && css`
        box-shadow:
          0 0 0 30px rgba(222, 222, 222, 0.04),
          0 0 0 60px rgba(222, 222, 222, 0.04),
          0 0 0 80px rgba(222, 222, 222, 0.04);
      `}
    }

    @media only screen and (max-width: 1100) {
      width: 250px;
      height: 250px;

      ${({ win }) => win && css`
        box-shadow:
          0 0 0 40px rgba(222, 222, 222, 0.04),
          0 0 0 80px rgba(222, 222, 222, 0.04),
          0 0 0 120px rgba(222, 222, 222, 0.04);
      `}
    }
  `
}

export const Container = styled.button`
  background: ${({ disabled }) => disabled ? '#dedede' : '#fff'} ;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  box-shadow: 0 0.7em 0 ${({ variant }) => colors[`${variant}Dark`]};
  &:active{
    box-shadow: 0 0 0 ${({ variant }) => colors[`${variant}Dark`]};
  }

  ${({ win }) => win && css`
    box-shadow:
      0 0 0 40px rgba(222, 222, 222, 0.04),
      0 0 0 90px rgba(222, 222, 222, 0.04),
      0 0 0 140px rgba(222, 222, 222, 0.04);
  `}

  ${({ size }) => sizes[size]};

  &:disabled {
    pointer-events: none;
  }

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

export const WaitingResult = styled.div`
 ${({ size }) => sizes[size]};
  background: rgba(0,0,0, 0.2);
  border-radius: 50%;

`
