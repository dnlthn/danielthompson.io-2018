import React from 'react'
import glamorous from 'glamorous'

import IconWithLink from 'components/reusable/icon-link'

import navigation from 'data/nav'

const NavBar = () => (
  <Container>
    {navigation.map(nav_item => {
      if (!nav_item.isReleased) return null
      return (
        <IconWithLink
          key={nav_item.label}
          alt={`Navigate to the ${nav_item.label} page.`}
          {...nav_item}
        />
      )
    })}
  </Container>
)

const number_of_displayed_icons = navigation.filter(
  nav_item => nav_item.isReleased
).length

const Container = glamorous.div({
  alignItems: 'center',
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: `repeat(${number_of_displayed_icons}, 20px)`,
  justifyContent: 'center',
  marginTop: '.5rem',
  marginBottom: '4rem',

  '@media(min-width: 576px)': {
    justifyContent: 'end',
    gridGap: '1.5rem',
    gridTemplateColumns: `repeat(${number_of_displayed_icons}, 25px)`,
  },
})

export default NavBar
