import React from 'react'
import Link from 'gatsby-link'

import ScalableImg from 'components/reusable/scalable-img'
import Tooltip from 'components/reusable/tooltip'

const IconWithLink = ({ path, label, svg, alt, height }) => {
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
        <img src={svg} alt={alt} height={height} />
      </Tooltip>
    </Link>
  ) : (
    <a href={path}>
      <Tooltip text={label} putBelow>
        <img src={svg} alt={alt} height={height} />
      </Tooltip>
    </a>
  )
}

export default IconWithLink
