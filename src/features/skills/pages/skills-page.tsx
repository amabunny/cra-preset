import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { BaseTemplate, Container } from 'ui'
import { Skills } from '../components/root'

export const SkillsPage = (props: RouteComponentProps) => {
  return (
    <BaseTemplate>
      <Container>
        <Skills />
      </Container>
    </BaseTemplate>
  )
}
