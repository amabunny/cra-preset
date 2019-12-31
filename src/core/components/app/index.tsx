import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Router } from '../router'
import './style.css'

const AppView = () => {
  return (
    <Router />
  )
}

export const App = hot(AppView)
