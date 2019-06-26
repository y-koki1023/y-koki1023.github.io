import React from 'react'
import Style from '../css/MainVisual.module.css'
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image'

function MainVisual(props){
  return(
    <section name = "home">
      <div className = {Style.MainVisualBody}>
            <div className = {Style.MainVisualImageArea}>
              <StaticQuery
                query={query}
                render={ data => (
                      <Img 
                        fluid={data.logo1.childImageSharp.fluid}
                        alt="test"
                        style={{height:"70vh"}}
                      />
                )}
              />
            <div className = {Style.MainVisualText}>
              <p className = {Style.MainVisualTextH1}>Koki Yamamoto</p>
              <p className = {Style.MainVisualTextH2}>A FrontEnd developer</p>
            </div>
        </div>
      </div>
    </section>
  )

   
}
export default MainVisual

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




