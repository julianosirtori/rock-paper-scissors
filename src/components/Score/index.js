import React from 'react'

import { Container, Points } from './styles'

import Logo from '../../asset/logo.svg'

function Score () {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Points>
        <span>SCORE</span>
        <strong>13</strong>
      </Points>
    </Container>
  )
}

export default Score
