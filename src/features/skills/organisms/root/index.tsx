import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Card } from 'antd'
import { Container } from 'ui'
import { SergeiModel } from 'models/sergei'
import classes from './style.module.less'

export const Skills = () => {
  const { formatMessage } = useIntl()

  return (
    <Container className={classes.container}>
      <div className={classes.wrapper}>
        {SergeiModel.skills.map(({ image, key }) => {
          const title = formatMessage({ id: `skillsTitles.${key}` })

          const titleNode = (
            <div className={classes.textCenter}>
              {title}
            </div>
          )

          const cover = (
            <div className={classes.imageCover}>
              <img
                alt={title}
                className={classes.image}
                src={image}
              />
            </div>
          )

          return (
            <Card
              bordered={false}
              className={classes.card}
              cover={cover}
              key={title}
              size='small'
              title={titleNode}
            >
              <FormattedMessage id={`skillsDescriptions.${key}`} />
            </Card>
          )
        })}
      </div>
    </Container>
  )
}
