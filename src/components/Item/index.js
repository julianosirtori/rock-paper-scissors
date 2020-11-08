import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import IconPaper from '../../asset/icon-paper.svg'
import IconRock from '../../asset/icon-rock.svg'
import IconScissors from '../../asset/icon-scissors.svg'

import * as S from './styles'

const Item = ({ variant, ...props }) => {
  const getImage = useCallback(() => {
    switch (variant) {
      case 'paper':
        return <img src={IconPaper} alt="item"/>
      case 'rock':
        return <img src={IconRock} alt="item"/>
      case 'scissors':
        return <img src={IconScissors} alt="item"/>
      default:
        return <img src={IconPaper} alt="item"/>
    }
  }, [variant])

  return (
    <S.Container variant={variant} {...props}>
      {getImage()}
    </S.Container>
  )
}

Item.propTypes = {
  variant: PropTypes.string
}

export default Item
