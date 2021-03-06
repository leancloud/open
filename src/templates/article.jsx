import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import favicon from '../images/favicon.png';
import styles from './article.module.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'og:title',
            content: post.frontmatter.title
          },
          {
            name: 'og:description',
            content: data.site.siteMetadata.title
          },
          {
            name: 'og:image',
            content: data.site.siteMetadata.url + favicon
          }
        ]}
      />
      <div className={styles.article}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
