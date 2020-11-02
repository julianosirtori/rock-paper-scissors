import React from 'react'

import PropTypes from 'prop-types'

import { ThemeProvider as Theme, createGlobalStyle } from 'styled-components'

import theme from '../asset/theme'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body {
    background: #203957;
    height: 100%;
    background: -webkit-radial-gradient(top, #203957, #14173A);
    background: -moz-radial-gradient(top, #203957, #14173A);
    background: radial-gradient(to bottom, #203957, #14173A);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto Mono', monospace;
  }

  a{
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`

function ThemeProvider ({ children }) {
  return (
    <Theme theme={theme}>
      <GlobalStyle/>
      {children}
    </Theme>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.any
}

export default ThemeProvider
