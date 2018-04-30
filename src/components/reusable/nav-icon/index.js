import React from 'react'
import glamorous from 'glamorous'
import Link from 'gatsby-link'

import Tooltip from 'components/reusable/tooltip'
import ScalableImg from 'components/reusable/scalable-img'

const NavIcon = ({ path, label, svg, isReleased }) => {
  return path.startsWith('/') ? (
    <Link
      to={path}
      style={{
        borderBottom: '3px solid transparent',
        borderRadius: '1px',
      }}
      activeStyle={{
        borderBottom: '3px solid #FECA57',
        borderRadius: '1px',
      }}
    >
      <Tooltip text={label} putBelow>
        <ScalableImg src={svg} alt={`Navigate to the ${label} page`} />
      </Tooltip>
    </Link>
  ) : (
    <a href={path}>
      <Tooltip text={label} putBelow>
        <ScalableImg src={svg} alt={`Navigate to the ${label} page`} />
      </Tooltip>
    </a>
  )
}

export default NavIcon
