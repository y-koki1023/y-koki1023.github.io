import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function imageContainer(){
  const data = useStaticQuery(graphql`
    query{
      file(relativePath: {eq:"backImage.jpg"}){
        childImageSharp{
          fixed{
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
   return(
        <Img 
          fixed={data.file.childmageSharp.fixed}
          alt='backImage'
        />
   )
  
}

export default imageContainer