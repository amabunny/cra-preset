import React from 'react'
import { Router as ReachRouter } from '@reach/router'
import { SkillsPage } from 'features/skills'

export const Router = () => (
  <ReachRouter>
    <SkillsPage path={'/'} />
  </ReachRouter>
)
