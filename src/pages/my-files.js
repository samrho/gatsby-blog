import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>all the files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>id</th>
              <th>prettySize</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>

          {data.allFile.edges.map(({node}, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.id}</td>
              <td>{node.prettySize}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          id
          prettySize
          birthTime(fromNow: true)
        }
      }
    }
  }
`
