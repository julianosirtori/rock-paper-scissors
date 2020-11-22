import styled, { css } from 'styled-components'

const borderSizes = {
  default: '25px',
  big: '50px'
}

const variants = {
  paper: css`
    border: ${({ size }) => borderSizes[size]} solid #5572f2;
    box-shadow: 0 0.7em 0 #2844bf;

    &:active{
      box-shadow: 0 0 0 #2844bf;
    }

  `,
  rock: css`
    border: ${({ size }) => borderSizes[size]} solid #de3f5b;
    box-shadow: 0 0.7em 0 #9f1232;

    &:active{
      box-shadow: 0 0 0 #9f1232;
    }
  `,
  scissors: css`
    border: ${({ size }) => borderSizes[size]} solid #eba722;
    box-shadow: 0 0.7em 0 #c76c1b;

    &:active{
      box-shadow: 0 0 0 #c76c1b;
    }
  `
}

const sizes = {
  default: css`
    width: 200px;
    height: 200px;


  `,
  big: css`
    width: 400px;
    height: 400px;

    img{
      width: 100px; 
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

  ${({ variant }) => variants[variant]};

  ${({ size }) => sizes[size]};

  ${({ win }) => win && css`
    box-shadow:
      0 0 0 40px rgba(222, 222, 222, 0.04),
      0 0 0 90px rgba(222, 222, 222, 0.04),
      0 0 0 140px rgba(222, 222, 222, 0.04);
  `}

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
