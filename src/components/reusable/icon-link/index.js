import React from 'react'
import Link from 'gatsby-link'

import ScalableImg from 'components/reusable/scalable-img'
import Tooltip from 'components/reusable/tooltip'

const IconWithLink = ({ path, label, svg, alt }) => {
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
        <ScalableImg src={svg} alt={alt} />
      </Tooltip>
    </Link>
  ) : (
    <a href={path}>
      <Tooltip text={label} putBelow>
        <ScalableImg src={svg} alt={alt} />
      </Tooltip>
    </a>
  )
}

export default IconWithLink
