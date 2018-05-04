import React from 'react'
import glamorous from 'glamorous'

const Tooltip = ({ children, text, putBelow }) => (
  <Container>
    {children}
    <Text putBelow={putBelow}>{text}</Text>
  </Container>
)

const Container = glamorous.div({
  display: 'inline-block',
  height: 'auto',
  position: 'relative',

  '@media(min-width: 1200px)': {
    ':hover span': {
      visibility: 'visible',
    },
  },
})

const Text = glamorous.span(
  {
    fontSize: '1.125rem',
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
  },
  ({ putBelow }) =>
    putBelow
      ? {
          transform: 'translate(-50%)',
          top: '125%',
          '::after': {
            borderColor: 'transparent transparent #F2F2F8 transparent',
            borderStyle: 'solid',
            borderWidth: '5px',
            bottom: '100%',
            content: '" "',
            left: '50%',
            marginLeft: '-5px',
            position: 'absolute',
          },
        }
      : {}
)

export default Tooltip
