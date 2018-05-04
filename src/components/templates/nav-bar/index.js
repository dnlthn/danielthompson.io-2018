import React from 'react'
import glamorous from 'glamorous'

import IconWithLink from 'components/reusable/icon-link'

import navigation from 'data/nav'

const NavBar = () => (
  <Container>
    <IconContainer>
      {navigation.map(nav_item => {
        if (!nav_item.isReleased) return null
        return (
          <IconWithLink
            key={nav_item.label}
            alt={`Navigate to the ${nav_item.label} page.`}
            {...nav_item}
            height="30px"
          />
        )
      })}
    </IconContainer>
  </Container>
)

const Container = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  marginTop: '.5rem',
  alignSelf: 'center',

  '@media(min-width: 576px)': {
    marginBottom: '3rem',
  },
})

const IconContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '150px',
})

export default NavBar
