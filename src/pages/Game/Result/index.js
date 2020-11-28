import React, { useState, useEffect, useCallback } from 'react'

import { useLocation } from 'react-router-dom'

import possibleChoices from '../../../services/possibleChoices'

import Item from '../../../components/Item'
import GameResult from '../../../components/GameResult'

import * as S from './styles'

function Result () {
  const [youPicked, setYouPicked] = useState('')
  const [housePicked, setHousePicked] = useState('')
  const [isYouWin, setIsYouWin] = useState()

  const location = useLocation()

  useEffect(() => {
    const { state } = location

    setYouPicked(state.item)
  }, [location])

  useEffect(() => {
    const timer = setTimeout(() => {
      let picked = ''
      do {
        picked = possibleChoices[Math.floor(Math.random() * 3)]
      } while (picked === youPicked)
      setHousePicked(picked)
    }, 1000)

    return () => clearTimeout(timer)
  }, [youPicked])

  const callbackResult = useCallback((result) => {
    setIsYouWin(result)
  }, [setIsYouWin])

  return (
    <S.Container>
      <S.IndividualResult>
        <span>YOU PICKED</span>
        <Item size="big" disabled win={isYouWin} variant={youPicked}/>
      </S.IndividualResult>

      <GameResult
        display={housePicked && youPicked ? 1 : 0}
        handleResult={callbackResult}
        youPicked={youPicked}
        housePicked={housePicked}
      />

      <S.IndividualResult>
        <span>THE HOUSE PICKED</span>
        <Item size="big" disabled win={!isYouWin} variant={housePicked}/>

      </S.IndividualResult>
    </S.Container>
  )
}

export default Result
