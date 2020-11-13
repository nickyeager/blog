/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"

type Props = {
    isDark: boolean
}

const HeaderTitle = ({ isDark }: Props) => {
    const { siteTitle } = useSiteMetadata()
    const { basePath } = useMinimalBlogConfig()

    return (
        <Link
            to={replaceSlashes(`/${basePath}`)}
            aria-label={`${siteTitle} - Back to home`}
            sx={{ color: `heading`, textDecoration: `none`, display: 'flex', alignItems: 'center' }}
        >
            <img src="/headshot.jpeg" alt="Nick's awesome headshot"
                 sx={{ width: '80px',
                       marginRight: '20px',
                       borderRadius: `50%`,
                       filter: isDark ? 'grayscale(100%)' : 'none',
                       transition: `transform 0.45s ease`,
                    }}
            />
            <span sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>{siteTitle}</span>
        </Link>
    )
}

export default HeaderTitle