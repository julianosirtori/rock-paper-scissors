import React from 'react'

import PropTypes from 'prop-types'

import { BrowserRouter } from 'react-router-dom'

import ThemeProvider from './ThemeProvider'
import ScoreProvider from './ScoreProvider'

function Providers ({ children }) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScoreProvider>
          {children}
        </ScoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

Providers.propTypes = {
  children: PropTypes.any
}

export default Providers
