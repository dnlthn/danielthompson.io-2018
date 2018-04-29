import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'glamor/reset'

const Layout = ({ children, data }) => {
  const { title, description, keywords } = data.site.siteMetadata

  return (
    <div>
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
      {children()}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

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
