import React, { memo, lazy, Suspense } from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import styled from 'styled-components'

import Loader from '../../components/Loader'

import Score from '../../components/Score'

const Start = lazy(() => import('./Start'))
const Result = lazy(() => import('./Result'))

export const GameContent = styled.div`
  padding: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button{
    background: none;
    border: 2px solid #5b6b84;
    border-radius: 8px;
    padding:  8px;
    width: 100%;
    max-width: 150px;
    color: #fbfbfb;

    &:active{
      opacity: 0.5;
    }
  }
`

const Game = memo(() => {
  return (
    <GameContent>
      <Score/>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/' exact component={Start} />
          <Route path='/result' component={Result} />
          <Redirect to='/' />
        </Switch>
      </Suspense>
      <Footer>
        <button>Rules</button>
      </Footer>
    </GameContent>

  )
})

Game.displayName = 'Game'

export default Game
