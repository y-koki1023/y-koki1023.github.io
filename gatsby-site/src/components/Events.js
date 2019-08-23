import React,{useState} from 'react'
import {Typography, Paper} from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import { graphql,StaticQuery } from 'gatsby';


export default (props) =>  {
    const [isOpen, setOpen] = useState(false);
    const handleClick = () =>{
        setOpen(!isOpen);
    }
    
    
    return <StaticQuery
        query = {eventsQuery}
        render = { ({ allMarkdownRemark: { edges } }) => {
          return(

                <div>
                  {edges.filter(({ node: { frontmatter } }) => frontmatter.title === props.title).map(frontmatter => {
                      console.log(frontmatter)
                        return(
                          <div>
                            <Typography variant="body1" onClick={handleClick} style = {{}}>{frontmatter.node.frontmatter.title} </Typography>
                            <Modal
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                open={isOpen}
                                onClose={handleClick}
                            >
                              <Paper style = {{top:"50%",left:"50%",height:"50%",width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"20%"}}>
                                <Typography variant="h3">{frontmatter.node.frontmatter.title} </Typography>
                                <p>{frontmatter.node.frontmatter.description}</p>
                              </Paper>
                            </Modal>
                          </div>
                        )
                  })}
                    
                    {/* {edges.filter(({ node: { frontmatter } }) => {
                        const {title,description,index} = frontmatter;
                        console.log(frontmatter);
                        return(
                          <p>{title == props.title ? "A" : "B" } </p>
                        )
                    })} */}
                    
                    
                </div>

          )
          }}
            />
   
    
}

export const eventsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/events/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`