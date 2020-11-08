import styled from 'styled-components'

export const Overflow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  background: #14173aa8;

  display: ${({ active }) => active ? 'flex' : 'none'};

 
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 36px;
  border-radius: 12px;  
`
export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;

  h1{
    color: #3d4166;
    font-size: 32px;
    margin: 0;
    padding: 0;
  }
`

export const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  width: max-content;
  height: max-content;

  &:active{
    opacity: 0.5;
  }
`
