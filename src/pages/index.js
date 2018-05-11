import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
  <div>
    <p>本站包含 <a href="https://leancloud.cn/">LeanCloud</a> 开放的一些产品之外的资源，更多内容在逐步增加中。我们相信开放和透明会使一家公司更具长期竞争力，所以我们尽可能把信息公开。让所有人了解我们、监督我们的同时，也希望这些信息可以为他人参考和借鉴，发挥最大的价值。</p>
    <h2>管理制度</h2>
    {data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.category === 'management').map((({ node }) => (
      <Link to={node.fields.slug} style={{ textDecoration: `none`, color: `inherit` }} key={node.id}>
        <h3>{node.frontmatter.title}</h3>
        </Link>)))}
    <h2>指南</h2>
    {data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.category === 'guide').map((({ node }) => (
      <Link to={node.fields.slug} style={{ textDecoration: `none`, color: `inherit` }} key={node.id}>
        <h3>{node.frontmatter.title}</h3>
      </Link>
    )))}
    <h2>参考材料</h2>
    {data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.category === 'reference').map((({ node }) => (
      <Link to={node.fields.slug} style={{ textDecoration: `none`, color: `inherit` }} key={node.id}>
        <h3>{node.frontmatter.title}</h3>
      </Link>
    )))}
  </div>
);

export const query = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id,
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