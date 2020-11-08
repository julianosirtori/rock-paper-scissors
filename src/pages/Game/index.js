import React, { memo, lazy, Suspense } from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import styled from 'styled-components'

import Loader from '../../components/Loader'
import Footer from '../../components/Footer'
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
      <Footer/>
      </Suspense>
    </GameContent>
  )
})

Game.displayName = 'Game'

export default Game
