import React from 'react'
import glamorous from 'glamorous'

import SkillsList from 'components/templates/skills-list'
import Dropdown from 'containers/dropdown'

const Skills = () => (
  <Dropdown initialValue="daily">
    {({ value, handleChange }) => {
      return (
        <div>
          <Statement>
            {value === 'previously'
              ? `Here's some tech I have `
              : `Here's some tech I use `}
            <DropdownWrapper>
              <FrequencyDropdown value={value} onChange={handleChange}>
                <option value="daily">daily</option>
                <option value="occasionally">occasionally</option>
                <option value="previously">previously</option>
              </FrequencyDropdown>
            </DropdownWrapper>
            {value === 'previously' ? ` used` : ''}
          </Statement>
          <SkillsList frequency={value} category="tooling" />
          <SkillsList frequency={value} category="languages" />
          <SkillsList frequency={value} category="the rest" />
        </div>
      )
    }}
  </Dropdown>
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

const DropdownWrapper = glamorous.span({
  borderBottom: '2px dashed #FECA57',
})

const FrequencyDropdown = glamorous.select({
  fontWeight: '600',
  color: '#FECA57',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '0',
  paddingBottom: '.25rem',
})

export default Skills
