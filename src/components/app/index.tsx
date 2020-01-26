import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { IntlProvider, getLocaleAndChangeLanguage } from 'shared-features/intl'
import { Router } from '../router'

const AppView = () => {
  useEffect(() => {
    getLocaleAndChangeLanguage()
  }, [])

  return (
    <IntlProvider>
      <Router />
    </IntlProvider>
  )
}

export const App = hot(AppView)
