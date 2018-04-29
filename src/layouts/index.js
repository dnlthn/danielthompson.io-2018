import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'glamor/reset'

import Logo from 'components/logo'
import {
  BodyLayout,
  MainLayout,
  LogoLayout,
  ContentLayout,
} from 'layouts/general'

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
