import styled from 'styled-components'

export const Container = styled.div`
  display: ${({ display }) => display ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  margin: 0 48px;
  transition: all 0.5s;
  animation: scale 0.5s;

  @keyframes scale {
    from {
      display: none;
      transform: scale(0.5);
    }
    to {
      display: flex;
      transform: scale(1);
    }
  }

  h1{
    font-size: 48px;
    white-space: nowrap;
    color: #ffffff;
    margin-bottom: 8px;
  }

  button{
    color: #a13e53;
    background: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    padding: 16px 24px;
    width: 100%;
    box-shadow: -3px 8px 20px 0px #14173A;
    font-weight: 500;
    
    &:active{
      opacity: 0.8;
    }
  }

  @media only screen and (max-width: 1360px) {
    margin: 0 16px;
  
  }


`
