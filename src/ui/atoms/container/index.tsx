import React from 'react'
import cn from 'classnames'
import classes from './style.module.less'

interface IProps {
  children?: React.ReactNode
  className?: string
}

/** Component: media container for page elements */
export const Container = ({ children, className }: IProps) => {
  return (
    <div className={cn(classes.wrapper, className)}>
      {children}
    </div>
  )
}
