import React from 'react'

import Background from '../../../asset/bg-triangle.svg'

import * as S from './styles'

function Start () {
  return (
    <S.Container>
      <img className="background" src={Background} />
      <S.ItemPaper variant="paper"/>
      <S.ItemRock variant="rock"/>
      <S.ItemScissors variant="scissors"/>
    </S.Container>
  )
}

export default Start
