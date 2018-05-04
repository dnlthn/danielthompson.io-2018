import glamorous from 'glamorous'

export const LogoLayout = glamorous.div({
  alignSelf: 'center',
  marginTop: 'auto',
})

export const ContentLayout = glamorous.div({
  marginBottom: 'auto',
})

export const MainLayout = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '960px',
  padding: '2rem',
})

export const BodyLayout = glamorous.div({
  color: '#F2F2F8',
  display: 'flex',
  fontFamily:
    'Titillium Web, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontSize: '1.125rem',
  height: '100%',
  justifyContent: 'center',
  MozOsxFontSmoothing: 'grayscale',
  position: 'absolute',
  width: '100%',
  WebkitFontSmoothing: 'antialiased',
})
