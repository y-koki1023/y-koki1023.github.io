import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image'
import Style from '../css/Footer.module.css'
function Footer(){
    return(
        <section name="footer">
            <div className={Style.FooterBody}>
                
                
                <StaticQuery
                    query={query}
                    render={ data => (
                        <div className={Style.FooterLink}>
                            <p className ={Style.FooterLinkText}>You can find me at </p>
                            <a href="https://twitter.com/y_koki1023" className={Style.FooterLink}>
                                <Img 
                                    fixed={data.twitter.childImageSharp.fixed}
                                    alt="test"
                                    className = {Style.FooterLinkImage}
                                />
                            </a>
                            <a href="https://www.facebook.com/y.koki1023" >
                                <Img 
                                    fixed={data.facebook.childImageSharp.fixed}
                                    alt="test"
                                    className = {Style.FooterLinkImage}
                                />
                            </a>
                            <a href="https://github.com/y-koki1023">
                                <Img 
                                    fixed={data.github.childImageSharp.fixed}
                                    alt="test"
                                    className = {Style.FooterLinkImage}
                                />
                                </a>
                            <a href="https://www.wantedly.com/users/97836767">
                                <Img 
                                    fixed={data.wantedly.childImageSharp.fixed}
                                    alt="test"
                                    className = {Style.FooterLinkImage}
                                />
                            </a>
                        </div>
                    )}
                />
            </div>
        </section>
    )
}
export default Footer

export const query = graphql`
  query{
    twitter: file(relativePath: {eq: "Twitter.png"}) {
      childImageSharp{
        fixed(height:32,width:32){
          ...GatsbyImageSharpFixed
        }
      }
    }
    facebook: file(relativePath: {eq: "Facebook.png"}) {
        childImageSharp{
          fixed(height:32,width:32){
            ...GatsbyImageSharpFixed
          }
        }
    }
    github: file(relativePath: {eq: "Github.png"}) {
        childImageSharp{
          fixed(height:32,width:32){
            ...GatsbyImageSharpFixed
          }
        }
    }
    wantedly: file(relativePath: {eq: "Wantedly.png"}) {
        childImageSharp{
          fixed(height:32,width:32){
            ...GatsbyImageSharpFixed
          }
        }
    }
  }
`