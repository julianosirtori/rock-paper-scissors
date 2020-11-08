import React from 'react'

import PropTypes from 'prop-types'

import ImageRules from '../../asset/image-rules.svg'
import IconClose from '../../asset/icon-close.svg'

import * as S from './styles'

function Rules ({ active, onClose }) {
  return (
    <S.Overflow active={active}>
        <S.Container>
          <S.Header>
            <h1>RULES</h1>
            <S.Button onClick={onClose}>
              <img src={IconClose} alt="close"/>
            </S.Button>
          </S.Header>
          <img src={ImageRules} alt="Rules" />
        </S.Container>
      </S.Overflow>
  )
}

export default Rules

Rules.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func
}
