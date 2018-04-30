import glamorous from 'glamorous'

export const LogoLayout = glamorous.div({
  alignSelf: 'center',
})

export const ContentLayout = glamorous.div({
  alignSelf: 'center',
})

export const MainLayout = glamorous.div({
  // TEMP: Temporary color to see the div without
  // having to use devtools
  // backgroundColor: 'purple',

  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  maxWidth: '960px',
  padding: '2rem',
})

export const BodyLayout = glamorous.div({
  alignItems: 'center',
  backgroundColor: '#37394C',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
  fontFamily:
    'Titillium Web, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
})
