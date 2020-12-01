import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`

export const IndividualResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px;

  span{
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 32px;
  }
`
