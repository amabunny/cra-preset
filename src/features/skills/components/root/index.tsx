import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Card } from 'antd'
import { SergeiModel } from 'models/sergei'
import classes from './style.module.less'

export const Skills = () => {
  return (
    <div className={classes.wrapper}>
      {SergeiModel.skills.map(({ title, image, key }) =>
        <Card
          bordered={false}
          className={classes.card}
          cover={(
            <div className={classes.imageCover}>
              <img
                alt={title}
                className={classes.image}
                src={image}
              />
            </div>
          )}
          key={title}
          size='small'
          title={title}
        >
          <FormattedMessage id={`skills.${key}`} />
        </Card>
      )}
    </div>
  )
}
