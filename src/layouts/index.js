import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import 'glamor/reset'
import { css } from 'glamor'

import ScalableImg from 'components/reusable/scalable-img'
import logo_svg from 'images/daniel-thompson-logo.svg'

import {
  BodyLayout,
  ContentLayout,
  LogoLayout,
  MainLayout,
} from 'components/unique/root-layouts'
import NavBar from 'components/unique/nav-bar'

css.global('body', {
  backgroundColor: '#37394C',
})
const RootLayout = ({ children, data }) => {
  const { title, description, keywords } = data.site.siteMetadata

  return (
    <BodyLayout>
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
        <LogoLayout>
          <ScalableImg src={logo_svg} alt="Daniel Thompson Logo" />
          <NavBar />
        </LogoLayout>
        <ContentLayout>{children()}</ContentLayout>
      </MainLayout>
    </BodyLayout>
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
