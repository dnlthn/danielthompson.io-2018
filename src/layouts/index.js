import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import 'glamor/reset'
import { css } from 'glamor'

import ScalableImg from 'components/reusable/scalable-img'
import logo_svg from 'images/daniel-thompson-logo.svg'

import { ContentLayout, MainLayout } from 'components/templates/root-layouts'
import NavBar from 'components/templates/nav-bar'

css.global('body', {
  alignItems: 'center',
  backgroundColor: '#37394C',
  color: '#F2F2F8',
  display: 'flex',
  fontFamily:
    'Titillium Web, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontSize: '1.125rem',
  height: '100%',
  justifyContent: 'center',
  MozOsxFontSmoothing: 'grayscale',
  position: 'absolute',
  WebkitFontSmoothing: 'antialiased',
  width: '100%',
})
const RootLayout = ({ children, data }) => {
  const { title, description, keywords } = data.site.siteMetadata

  return (
    <MainLayout>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: description,
          },
          {
            name: 'keywords',
            content: keywords,
          },
        ]}
      />
      <div>
        <ScalableImg src={logo_svg} alt="Daniel Thompson Logo" />
        <NavBar />
      </div>
      <ContentLayout>{children()}</ContentLayout>
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
