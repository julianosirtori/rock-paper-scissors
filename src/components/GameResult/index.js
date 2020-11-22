import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

function GameResult ({ win }) {
  return (
    <S.Container>
      <h1>{win ? 'YOU WIN' : 'YOU LOSE'}</h1>
      <button>PLAY AGAIN</button>
    </S.Container>
  )
}

GameResult.propTypes = {
  win: PropTypes.bool
}

export default GameResult
