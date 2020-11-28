import React, { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import * as S from './styles'

function GameResult ({ win }) {
  const history = useHistory()

  const goStart = useCallback(() => {
    history.replace('/')
  }, [])

  return (
    <S.Container>
      <h1>{win ? 'YOU WIN' : 'YOU LOSE'}</h1>
      <button onClick={goStart}>PLAY AGAIN</button>
    </S.Container>
  )
}

GameResult.propTypes = {
  win: PropTypes.bool
}

export default GameResult
