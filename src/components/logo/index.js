import React from 'react'
import glamorous from 'glamorous'

import logo_svg from 'images/daniel-thompson-logo.svg'

const Image = glamorous.img({
  width: '100%',
  height: 'auto',
})

const Logo = () => <Image src={logo_svg} alt="Daniel Thompson Logo" />

export default Logo
