import React from 'react'
import SkillsList from 'components/unique/skills-list'
import glamorous from 'glamorous'

const Skills = () => (
  <div>
    <Statement>
      Here's some tech I use <Frequency>daily</Frequency>
    </Statement>
    <SkillsList frequency="daily" category="tooling" />
    <SkillsList frequency="daily" category="languages" />
    <SkillsList frequency="daily" category="the rest" />
  </div>
)

const Statement = glamorous.h1({
  fontWeight: '200',
  color: '#F2F2F8',
  marginBottom: '3rem',
  fontSize: '1.625rem',

  '@media(min-width: 576px)': {
    fontSize: '1.875rem',
  },
})

const Frequency = glamorous.span({
  fontWeight: '600',
  color: '#FECA57',
})

export default Skills
