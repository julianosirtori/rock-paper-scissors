import styled from 'styled-components'

import Item from '../../../components/Item'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;

  @media only screen and (max-width: 600px) {
    width: 380px;
    height: 380px;
    .background{
      width: 200px;
    }
  }

  @media only screen and (max-width: 400px) {
    width: 280px;
    height: 280px;
    .background{
      width: 200px;
    }
  }
`

export const ItemPaper = styled(Item)`
  position: absolute;
  bottom: 0;
`

export const ItemRock = styled(Item)`
  position: absolute;
  top: 0;
  right: 0;
`

export const ItemScissors = styled(Item)`
  position: absolute;
  top: 0;
  left: 0;
`
