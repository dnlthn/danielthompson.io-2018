import React from 'react'
import glamorous from 'glamorous'

import ScalableImg from 'components/reusable/scalable-img'
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
            <ScalableImg alt={label} src={svg} />
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
    gridGap: '2rem',
    justifyContent: 'start',
    marginTop: '.5rem',
    gridTemplateColumns: `repeat(5, 30px)`,

    '@media(min-width: 576px)': {
      gridGap: '3rem',
      gridTemplateColumns: `repeat(5, 40px)`,
    },
  },
  ({ length }) => ({
    '@media(min-width: 768px)': {
      gridTemplateColumns: `repeat(${length}, 50px)`,
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
