import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      gradient1: file(relativePath: { eq: "plastic1-tiny.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gradient2: file(relativePath: { eq: "plastic2-tiny.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gradient3: file(relativePath: { eq: "plastic3-tiny.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reactory: file(relativePath: { eq: "Reactory-Placeholder-blurred.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hive: file(relativePath: { eq: "Hive-Placeholder-blurred.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crypto: file(relativePath: { eq: "Crypto-Placeholder-blurred.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brad: file(relativePath: { eq: "brad-and-tree.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brad2: file(relativePath: { eq: "brad-2.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brad3: file(relativePath: { eq: "brad-3.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {src === 1 ? (
        <Img
          fluid={data.gradient1.childImageSharp.fluid}
          loading="eager"
          alt="Projects gradient text"
          style={{ height: "100%", mixBlendMode: "inherit" }}
        />
      ) : src === 2 ? (
        <Img
          fluid={data.gradient2.childImageSharp.fluid}
          loading="eager"
          alt="About Me gradient text"
          style={{ height: "100%", mixBlendMode: "inherit" }}
        />
      ) : src === 3 ? (
        <Img
          fluid={data.gradient3.childImageSharp.fluid}
          loading="eager"
          alt="Contact gradient text"
          style={{ height: "100%", mixBlendMode: "inherit" }}
        />
      ) : src === 4 ? (
        <Img
          fluid={data.reactory.childImageSharp.fluid}
          alt="Reactory placeholder"
          style={{
            height: "100%",
            opacity: "inherit",
            mixBlendMode: "inherit",
          }}
        />
      ) : src === 5 ? (
        <Img
          fluid={data.hive.childImageSharp.fluid}
          alt="Hive placeholder"
          style={{
            height: "100%",
            opacity: "inherit",
            mixBlendMode: "inherit",
          }}
        />
      ) : src === 6 ? (
        <Img
          fluid={data.crypto.childImageSharp.fluid}
          alt="Crypto Butler placeholder"
          style={{
            height: "100%",
            opacity: "inherit",
            mixBlendMode: "inherit",
          }}
        />
      ) : src === 7 ? (
        <Img
          fluid={data.brad.childImageSharp.fluid}
          alt="brad and a tree"
          objectPosition="50% 0%"
          style={{ height: "100%", width: "100%" }}
        />
      ) : src === 8 ? (
        <Img
          fluid={data.brad2.childImageSharp.fluid}
          alt="brad and a tree"
          objectPosition="50% 0%"
          style={{ height: "100%", width: "100%" }}
        />
      ) : src === 9 ? (
        <Img
          fluid={data.brad3.childImageSharp.fluid}
          alt="brad and a tree"
          objectPosition="50% 0%"
          style={{ height: "100%", width: "100%" }}
        />
      ) : null}
    </>
  )
}

export default Image