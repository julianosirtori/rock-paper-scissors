import React, { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import Background from '../../../asset/bg-triangle.svg'

import * as S from './styles'

function Start () {
  const history = useHistory()

  const chooseItem = useCallback((item) => {
    history.push('result', { item })
  }, [])

  return (
    <S.Container>
      <img className="background" src={Background} />
      <S.ItemPaper onClick={() => chooseItem('paper')} variant="paper"/>
      <S.ItemRock onClick={() => chooseItem('rock')} variant="rock"/>
      <S.ItemScissors onClick={() => chooseItem('scissors')} variant="scissors"/>
    </S.Container>
  )
}

export default Start
