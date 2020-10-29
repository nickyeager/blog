import { graphql, useStaticQuery } from "gatsby"

type UseMinimalBlogConfigProps = {
    minimalBlogConfig: {
        basePath: string
        blogPath: string
        postsPath: string
        pagesPath: string
        tagsPath: string
        externalLinks: {
            name: string
            url: string
        }[]
        navigation: {
            title: string
            slug: string
        }[]
        showLineNumbers: boolean
        showCopyButton: boolean
    }
}

const useMinimalBlogConfig = () => {
    console.log('made it')
    const data = useStaticQuery<UseMinimalBlogConfigProps>(graphql`
    query {
      minimalBlogConfig {
        basePath
        blogPath
        postsPath
        pagesPath
        tagsPath
        externalLinks {
          name
          url
        }
        navigation {
          title
          slug
        }
        showLineNumbers
        showCopyButton
      }
    }
  `)
console.log(data)
    return data.minimalBlogConfig
}

export default useMinimalBlogConfig