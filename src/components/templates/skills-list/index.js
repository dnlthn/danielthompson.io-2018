import React from 'react'
import glamorous from 'glamorous'

import Tooltip from 'components/reusable/tooltip'

import skills from 'data/skills'

const SkillsList = ({ category, frequency }) => {
  const filtered_skills = skills.filter(
    skill => skill.category === category && skill.frequency === frequency
  )

  return (
    <div style={{ marginBottom: '3rem' }}>
      <SectionHeader>{category}</SectionHeader>
      <Container>
        {filtered_skills.map(({ label, svg }) => (
          <Tooltip key={label} text={label}>
            <TechIcon alt={label} src={svg} />
          </Tooltip>
        ))}
      </Container>
    </div>
  )
}

const TechIcon = glamorous.img({
  margin: '1rem',
  height: '40px',

  '@media(min-width: 576px)': {
    height: '50px',
  },
})

const Container = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
})

const SectionHeader = glamorous.h2({
  fontSize: '1.125rem',
  color: '#FECA57',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
})

export default SkillsList
