import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'
import {CoreContent} from '@/lib/utils/contentlayer'
import type {Blog} from 'contentlayer/generated'

interface Props {
  frontMatter: CoreContent<Blog>
}

const DisqusComponent = dynamic(
  () => {
    return import('@/components/comments/Disqus')
  },
  {ssr: false},
)

const Comments = ({frontMatter}: Props) => {
  const comment = siteMetadata?.comment
  if (!comment || Object.keys(comment).length === 0) return <></>
  return (
    <div id="comment">
      {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
        <DisqusComponent frontMatter={frontMatter} />
      )}
    </div>
  )
}

export default Comments
