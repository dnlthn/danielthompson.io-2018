import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import 'glamor/reset'

import Logo from 'components/logo'
import {
  BodyLayout,
  ContentLayout,
  LogoLayout,
  MainLayout,
} from 'layouts/general'
import NavIcon from 'components/nav-icon'

import navigation from 'data/nav'

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

        {navigation.map(nav_item => {
          if (nav_item.isReleased) {
            return (
              <div
                key={nav_item.label}
                style={{
                  height: '50px',
                  width: '50px',
                  margin: '1rem',
                }}
              >
                <NavIcon {...nav_item} />
              </div>
            )
          }
        })}
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
