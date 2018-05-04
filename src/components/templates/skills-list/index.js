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
      <Container length={filtered_skills.length}>
        {filtered_skills.map(({ label, svg }) => (
          <Tooltip key={label} text={label}>
            <img alt={label} src={svg} />
          </Tooltip>
        ))}
      </Container>
    </div>
  )
}

const Container = glamorous.div(
  {
    alignItems: 'center',
    display: 'grid',
    gridGap: '1.25rem',
    gridTemplateColumns: `repeat(5, 40px)`,
    gridTemplateRows: '5rem',
    '& img': {
      width: '100%',
      maxHeight: '50px',
    },

    '@media(min-width: 576px)': {
      gridGap: '1rem',
      gridTemplateColumns: `repeat(5, 80px)`,
    },
  },
  ({ length }) => ({
    '@media(min-width: 768px)': {
      gridTemplateColumns: `repeat(${length}, 90px)`,
    },
  })
)

const SectionHeader = glamorous.h2({
  fontSize: '1.125rem',
  color: '#FECA57',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
})

export default SkillsList
