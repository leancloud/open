import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const titleLinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'normal'
};

export default ({ data }) => (
  <Layout>
    <div>
      <p>
        <strong>
          LeanCloud 已经于 2021 年并入 <a href="https://taptap.com">TapTap</a>
          。本站的内容仅作为历史存档供参考。在进入 TapTap 后，LeanCloud
          的原团队加入了开发者服务部门（TDS）。我们仍然在新的公司继续执行一些这里提到的继续适用的制度和规则，而
          TapTap 也同样提倡开放、平等、透明的文化。如果你对 TDS
          感兴趣，欢迎访问我们的<a href="https://blog.taptap.dev">博客</a>
          ，我们也会继续开放可能对其他人有用的资源。
        </strong>
      </p>
      <p>
        本站包含 <a href="https://leancloud.cn/">LeanCloud</a>{' '}
        开放的一些产品之外的资源，更多内容在逐步增加中。我们相信开放和透明会使一家公司更具长期竞争力，所以我们尽可能把信息公开。让所有人了解我们、监督我们的同时，也希望这些信息可以为他人参考和借鉴，发挥最大的价值。
      </p>
      <h2>管理</h2>
      {data.allMarkdownRemark.edges
        .filter(({ node }) => node.frontmatter.category === 'management')
        .map(({ node }) => (
          <h3 key={node.id}>
            <Link to={node.fields.slug} style={titleLinkStyle}>
              {node.frontmatter.title}
            </Link>
          </h3>
        ))}
      <h2>指南</h2>
      {data.allMarkdownRemark.edges
        .filter(({ node }) => node.frontmatter.category === 'guide')
        .map(({ node }) => (
          <h3 key={node.id}>
            <Link to={node.fields.slug} style={titleLinkStyle}>
              {node.frontmatter.title}
            </Link>
          </h3>
        ))}
      <h2>参考</h2>
      {data.allMarkdownRemark.edges
        .filter(({ node }) => node.frontmatter.category === 'reference')
        .map(({ node }) => (
          <h3 key={node.id}>
            <Link to={node.fields.slug} style={titleLinkStyle}>
              {node.frontmatter.title}
            </Link>
          </h3>
        ))}
    </div>
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___pageOrder], order: ASC }) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            layout
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
