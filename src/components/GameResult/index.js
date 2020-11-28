import React, { useCallback, useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import { useScore } from '../../providers/ScoreProvider'

import { idsByItem } from '../../services/possibleChoices'

import * as S from './styles'
function GameResult ({ handleResult, youPicked, housePicked, display, ...props }) {
  const history = useHistory()
  const [win, setWin] = useState()
  const { score, setScore } = useScore()

  useEffect(() => {
    if (!housePicked) {
      return
    }
    const result = ((idsByItem[youPicked] + 1) % 3 === idsByItem[housePicked])
    setWin(result)
    handleResult(result)
    setScore(score + (result ? 1 : -1))
  }, [housePicked])

  const goStart = useCallback(() => {
    history.replace('/')
  }, [])

  return (
    <S.Container display={display} {...props}>
      <h1>{win ? 'YOU WIN' : 'YOU LOSE'}</h1>
      <button onClick={goStart}>PLAY AGAIN</button>
    </S.Container>
  )
}

GameResult.propTypes = {
  handleResult: PropTypes.func.isRequired,
  youPicked: PropTypes.string.isRequired,
  housePicked: PropTypes.string.isRequired,
  display: PropTypes.number
}

export default GameResult
