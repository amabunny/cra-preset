import React, { Fragment } from 'react'
import { Header } from '../../molecules/header'
import { Footer } from '../../molecules/footer'
import classes from './style.module.less'

interface IProps {
  children?: React.ReactNode
}

/** Component: contains basic layout
 * @see Header
 * @see Footer
 */
export const BaseTemplate = ({ children }: IProps) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <Header />
      </div>

      {children
        ? (
          <div>
            {children}
          </div>
        )
        : (
          <Fragment>
            No children passed
          </Fragment>
        )
      }

      <div>
        <Footer />
      </div>
    </div>
  )
}
