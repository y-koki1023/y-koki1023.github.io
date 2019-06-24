import React from 'react'
import Style from '../css/Content.module.css'
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image'

function Content(props){
  return(
    <div className = {Style.body}>
          <div className = {Style.textArea}>
            <StaticQuery
              query={query}
              render={ data => (
                    <Img 
                      fluid={data.logo1.childImageSharp.fluid}
                      alt="test"
                    />
              )}
            />
            <p className = {Style.text}>Koki Yamamoto</p>
      </div>
    </div>
  )

   
}
export default Content

export const query = graphql`
  query{
    logo1: file(relativePath: {eq: "backimage.jpg"}) {
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`




