import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import IconPaper from '../../asset/icon-paper.svg'
import IconRock from '../../asset/icon-rock.svg'
import IconScissors from '../../asset/icon-scissors.svg'

import * as S from './styles'

const Item = ({ variant, win = false, size = 'default', ...props }) => {
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

  if (!variant) {
    return <S.WaitingResult size={size}/>
  }

  return (
    <S.Container win={win} variant={variant} size={size} {...props}>
      {getImage()}
    </S.Container>
  )
}

Item.propTypes = {
  variant: PropTypes.string,
  win: PropTypes.bool,
  size: PropTypes.oneOf(['big', 'default'])
}

export default Item
