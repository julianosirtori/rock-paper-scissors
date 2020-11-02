import React, { useState, createContext, useContext } from 'react'

import PropTypes from 'prop-types'

const ScoreContext = createContext({})

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  )
}

ScoreProvider.propTypes = {
  children: PropTypes.any
}

export default ScoreProvider

export const useScore = () => {
  const context = useContext(ScoreContext)

  if (!context) {
    throw new Error('useScore must be used within a ScoreProvider')
  }

  return context
}
