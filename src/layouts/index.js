import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import 'glamor/reset'
import { css } from 'glamor'

import ScalableImg from 'components/reusable/scalable-img'
import logo_svg from 'images/daniel-thompson-logo.svg'

import { HeaderLayout, MainLayout } from 'components/templates/root-layouts'
import NavBar from 'components/templates/nav-bar'

css.global('html', {
  height: '100%',
  width: '100%',
  margin: '0',
})

css.global('body', {
  backgroundColor: '#37394C',
  color: '#F2F2F8',
  fontFamily:
    'Titillium Web, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontSize: '1.125rem',
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  width: '100%',
  height: '100%',
  margin: '0',
})
const RootLayout = ({ children, data }) => {
  const { title, description, keywords } = data.site.siteMetadata

  return (
    <MainLayout>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      />
      <HeaderLayout>
        <ScalableImg src={logo_svg} alt="Daniel Thompson Logo" />
        <NavBar />
      </HeaderLayout>
      <div>{children()}</div>
    </MainLayout>
  )
}

RootLayout.propTypes = {
  children: PropTypes.func,
}

export default RootLayout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
