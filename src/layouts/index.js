import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import 'glamor/reset'

import Logo from 'components/reusable/logo'
import {
  BodyLayout,
  ContentLayout,
  LogoLayout,
  MainLayout,
} from 'components/unique/root-layouts'
import NavBar from 'components/unique/nav-bar'

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
          <Logo />
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
