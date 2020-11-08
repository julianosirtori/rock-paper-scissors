import React, { useState } from 'react'

import Rules from '../Rules'

import * as S from './styles'

function Footer () {
  const [active, setActive] = useState(false)
  return (
    <S.FooterStyled>
      <Rules active={active} onClose={ () => setActive(false)} />
      <S.Button onClick={() => setActive(true)} >rules</S.Button>
    </S.FooterStyled>
  )
}

export default Footer
