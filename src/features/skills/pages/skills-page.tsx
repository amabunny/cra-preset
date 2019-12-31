import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { BaseTemplate } from 'ui'
import { Skills } from '../components/root'

export const SkillsPage = (props: RouteComponentProps) => {
  return (
    <BaseTemplate>
      <Skills />
    </BaseTemplate>
  )
}
