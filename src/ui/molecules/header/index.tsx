import React from 'react'
import { Avatar, Col, Row } from 'antd'
import { Container } from '../../atoms/container'
import classes from './style.module.less'

export const Header = () => {
  return (
    <div className={classes.wrapper}>
      <Container>
        <Row
          align='middle'
          type='flex'
        >
          <Col>
            <Avatar />
          </Col>

          <Col>
            @mabunny
          </Col>
        </Row>
      </Container>
    </div>
  )
}
