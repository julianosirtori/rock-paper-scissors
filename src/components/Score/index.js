import React from 'react'

import { useScore } from '../../providers/ScoreProvider'

import { Container, Points } from './styles'

import Logo from '../../asset/logo.svg'

function Score () {
  const { score: scoreNumber } = useScore()

  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Points>
        <span>SCORE</span>
        <strong>{scoreNumber}</strong>
      </Points>
    </Container>
  )
}

export default Score
