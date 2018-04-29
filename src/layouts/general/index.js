import glamorous from 'glamorous'

export const LogoLayout = glamorous.div({
  flex: 1,
  margin: '3rem',
})

export const ContentLayout = glamorous.div({
  margin: '1.5rem',
  alignSelf: 'center',
})

export const MainLayout = glamorous.div({
  // TEMP: Temporary color to see the div without
  // having to use devtools
  backgroundColor: 'purple',

  maxWidth: '960px',

  flex: 1,
  display: 'flex',
  flexDirection: 'column',
})

export const BodyLayout = glamorous.div({
  backgroundColor: '#37394C',

  width: '100%',
  height: '100%',
  position: 'absolute',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
