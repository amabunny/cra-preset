import React, { useState, useRef, useEffect, useMemo } from 'react'
import { FormattedMessage } from 'react-intl'
import moment from 'moment'
import { Container } from '../../atoms/container'
import classes from './style.module.less'

const REFRESH_TIMER_DURATION = 1000

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
        timer.current = setTimeout(timerFn, REFRESH_TIMER_DURATION)
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
          {moment(time).format('hh:mm:ss')}
        </div>
      </Container>
    </div>
  )
}
