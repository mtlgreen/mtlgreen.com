import React, { Component } from 'react';
import Helmet from 'react-helmet';

class SiteMetaInformation extends Component {
  render() {
    const siteMetadata = this.props.siteMetadata;
    return (
      <Helmet
        title={siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: siteMetadata.description
          },
          {
            name: 'author',
            content: siteMetadata.author.name
          },
          {
            name: 'copyright',
            content: `&copy; ${siteMetadata.author.name} 2018`
          },
          {
            property: 'og:url',
            content: siteMetadata.url
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: siteMetadata.title
          },
          {
            property: 'og:description',
            content: siteMetadata.description
          },
          {
            property: 'og:site_name',
            content: 'mtlgreen.com'
          }
        ]}
      />
    );
  }
}

export default SiteMetaInformation;