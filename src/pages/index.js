import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
  <div>
    <p>本站包含 <a href="https://leancloud.cn/">LeanCloud</a> 开放的一些产品之外的资源，更多内容在逐步增加中。我们相信开放和透明会使一家公司更具长期竞争力，所以我们尽可能把信息公开。让所有人了解我们、监督我们的同时，也希望这些信息可以为他人参考和借鉴，发挥最大的价值。</p>
    {data.allMarkdownRemark.edges.map((({ node }) => (
      <Link to={node.fields.slug} style={{ textDecoration: `none`, color: `inherit` }} key={node.id}>
        <h2>{node.frontmatter.title}</h2>
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