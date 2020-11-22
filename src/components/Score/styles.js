import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px 24px;
  border: 4px solid #5b6b84;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;

  @media only screen and (max-width: 600px) {
    img{
      width: 100px;
    }
  }
`

export const Points = styled.div`
  background: #fbfbfb;
  max-width: 150px;
  width: 100%;
  height: 110px;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span{
    color: #333c77;
    font-size: 16px;
    line-height: 14px;
    font-weight: 500;
  } 

  strong{
    color: #575469;
    font-size: 48px;
    font-weight: bolder;
  }

  @media only screen and (max-width: 600px) {
    padding: 16px 8px;
    height: 80px;

    max-width: 100px;
    strong{
      font-size: 38px;
    }
  }
    

  @media only screen and (max-width: 400px) {
    padding: 16px 8px;
    height: 80px;

    max-width: 80px;
    span{
      font-size: 14px;
      line-height: 10px;
    }
    strong{
      font-size: 32px;
    }
  }
  
`
