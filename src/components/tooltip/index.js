import React from 'react'
import glamorous from 'glamorous'

const Tooltip = ({ children, text }) => (
  <Container>
    {children}
    <Text>{text}</Text>
  </Container>
)

const Container = glamorous.div({
  display: 'inline-block',
  height: 'auto',
  position: 'relative',
  width: '100%',

  ':hover span': {
    visibility: 'visible',
  },
})

const Text = glamorous.span({
  backgroundColor: '#F2F2F8',
  borderBottom: '4px solid #FECA57',
  borderRadius: '1px',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.10)',
  color: '#37394C',
  left: '50%',
  padding: '.25rem .5rem',
  position: 'absolute',
  textAlign: 'center',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  visibility: 'hidden',
  zIndex: '1',
})

export default Tooltip
