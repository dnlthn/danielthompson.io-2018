import React from 'react'
import glamorous from 'glamorous'
import Link from 'gatsby-link'

import Tooltip from 'components/reusable/tooltip'

const NavIcon = ({ path, label, svg, isReleased }) => {
  // if (!isReleased) return <div />

  return path.startsWith('/') ? (
    <Link
      to={path}
      activeStyle={{ borderBottom: '3px solid #FECA57', borderRadius: '1px' }}
    >
      <Tooltip text={label} putBelow>
        <Image src={svg} alt={`Navigate to the ${label} page`} />
      </Tooltip>
    </Link>
  ) : (
    <a href={path}>
      <Tooltip text={label} putBelow>
        <Image src={svg} alt={`Navigate to the ${label} page`} />
      </Tooltip>
    </a>
  )
}

const Image = glamorous.img({
  height: 'auto',
  width: '100%',
})

export default NavIcon
