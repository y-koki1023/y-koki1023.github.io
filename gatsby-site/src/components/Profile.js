import React from 'react'
import Style from '../css/Profile.module.css'
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image'
function Profile(){
    return(
        <section name="profile" className = {Style.ProfileBody}>

            <div className = {Style.ProfileTitle}>
                <p className = {Style.ProfileTextH2} >Profile</p>
            </div>

            <div className = {Style.ProfileComp}>
                <div className = {Style.ProfileSubcomp}>
                    <div className = {Style.ProfileImage}>
                        <StaticQuery
                            query={query}
                            render={ data => (
                                <Img 
                                    fluid={data.file.childImageSharp.fluid}
                                    alt="profileImage"
                                    style = {{borderRadius: "50%"}}
                                />
                            )}
                            
                        />
                    </div>
                </div>

                <div className = {Style.ProfileSubcomp}>
                    <div className = {Style.ProfileText}>
                        <dl>
                            <dt>Name</dt>
                            <dd>KokiYamamoto / 山本皓貴</dd>
                            <dt>Belong</dt>
                            <dd>豊橋技術科学大学 情報知能工学課程</dd>
                            <dt>Write</dt>
                            <dd>C/C++/Java/Python/R/HTML/CSS/JavaScript/React/Ruby</dd>
                            <dt>Do</dt>
                            <dd>Web開発/競技プログラミング/機械学習/LoL</dd>
                            <dt>Mail</dt>
                            <dd>y.koki1023@gmail.com</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile

export const query = graphql`
  query{
    file(relativePath: {eq: "ProfileImage.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 400, maxHeight: 400){
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`