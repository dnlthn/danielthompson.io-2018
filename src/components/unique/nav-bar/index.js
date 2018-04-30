import React from 'react'

import NavIcon from 'components/reusable/nav-icon'
import navigation from 'data/nav'
import glamorous from 'glamorous'

const NavBar = () => (
  <Container>
    {navigation.map(nav_item => {
      if (!nav_item.isReleased) return null
      return <NavIcon key={nav_item.label} {...nav_item} />
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
  justifyContent: 'end',
  marginTop: '.5rem',
  marginBottom: '4rem',

  '@media(min-width: 576px)': {
    gridGap: '1.5rem',
    gridTemplateColumns: `repeat(${number_of_displayed_icons}, 25px)`,
  },
})

export default NavBar
