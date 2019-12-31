import React, { useState, useRef, useEffect, useMemo } from 'react'
import { FormattedMessage, FormattedDate } from 'react-intl'
import { Container } from '../../atoms/container'
import classes from './style.module.less'

const TIMER_REFRESH_DURATION = 1000

export const Footer = () => {
  const [time, setTime] = useState(new Date())
  const timer = useRef<NodeJS.Timeout | null>(null)

  const year = useMemo(
    () => new Date().getFullYear(),
    []
  )

  useEffect(
    () => {
      const timerFn = () => {
        timer.current = setTimeout(timerFn, TIMER_REFRESH_DURATION)
        setTime(new Date())
      }

      timerFn()

      return () => {
        if (timer.current) {
          clearTimeout(timer.current)
        }
      }
    },
    []
  )

  return (
    <div className={classes.wrapper}>
      <Container className={classes.layer}>
        <div>
          <FormattedMessage id='allRightsReserved' />, {year}
        </div>

        <div>
          <FormattedDate
            day='numeric'
            hour='numeric'
            minute='numeric'
            month='numeric'
            second='numeric'
            value={time}
          />
        </div>
      </Container>
    </div>
  )
}
