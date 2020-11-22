import React, { useState } from 'react'

import Item from '../../../components/Item'
import GameResult from '../../../components/GameResult'

import * as S from './styles'

function Result () {
  const [youPicked] = useState('paper')
  const [housePicked] = useState('rock')

  return (
    <S.Container>
      <S.IndividualResult>
        <span>YOU PICKED</span>
        <Item size="big" disabled win={false} variant={youPicked}/>
      </S.IndividualResult>

      <GameResult win={false}/>

      <S.IndividualResult>
        <span>THE HOUSE PICKED</span>
        <Item size="big" disabled win={true} variant={housePicked}/>

      </S.IndividualResult>
    </S.Container>
  )
}

export default Result
