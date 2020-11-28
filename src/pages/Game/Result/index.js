import React, { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import Item from '../../../components/Item'
import GameResult from '../../../components/GameResult'

import * as S from './styles'

const possibleChoices = {
  0: 'paper',
  1: 'rock',
  2: 'scissors'
}

function Result () {
  const [youPicked, setYouPicked] = useState('')
  const [housePicked, setHousePicked] = useState('')
  const [isYouWin] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const { state } = location

    setYouPicked(state.item)

    const timer = setTimeout(() => {
      setHousePicked(possibleChoices[Math.floor(Math.random() * 2)])
    }, 1000)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <S.Container>
      <S.IndividualResult>
        <span>YOU PICKED</span>
        <Item size="big" disabled win={isYouWin} variant={youPicked}/>
      </S.IndividualResult>

      {housePicked && youPicked && <GameResult win={isYouWin}/>}

      <S.IndividualResult>
        <span>THE HOUSE PICKED</span>
        <Item size="big" disabled win={!isYouWin} variant={housePicked}/>

      </S.IndividualResult>
    </S.Container>
  )
}

export default Result
