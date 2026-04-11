import Text from 'components/atoms/Text'
// import Image from 'next/image' #versi sebelummnya
import React, { useEffect, useRef, useState } from 'react'
interface BlogCardProps {
  thumbnailSrc: string
  title: string
  lead: string
  authorName: string
  authorAvatarSrc: string
  launchDate: string
  readTime: string
}
const BlogCard = ({
  authorAvatarSrc,
  authorName,
  launchDate,
  lead,
  readTime,
  thumbnailSrc,
  title,
}: BlogCardProps) => {
  const container: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [imageSize, setImageSize] = useState({ width: 325, height: 220 })
  useEffect(() => {
    if (container.current?.clientWidth !== undefined) {
      setImageSize({
        width: container.current?.clientWidth,
        height: container.current?.clientWidth / 1.5,
      })
    }
    window.addEventListener('resize', () => {
      if (container.current?.clientWidth !== undefined) {
        setImageSize({
          width: container.current?.clientWidth,
          height: container.current?.clientWidth / 1.5,
        })
      }
    })
  }, [])
  return (
    <div className="w-full space-y-6" ref={container}>
      <div className="">
        <img
          width={120} height={36}
          src={thumbnailSrc}
          className='rounded-xl'
          alt='Blog Thumbnail'
        />
      </div>
      <div className="space-y-2.5">
          <Text textStyle='BlogTitle' value={title} />
          <Text textStyle='BlogLead' value={lead} />
      </div>
      <div className="flex gap-5">
          <img src={authorAvatarSrc} width={50} height={50} alt="Blog Author Avatar" />
          <div className="">
              <Text textStyle='AuthorNamePreview' value={authorName}  />
              <Text textStyle='BlogMeta' value={`${launchDate} • ${readTime} read`}  />
          </div>
      </div>
    </div>
  )
}

export default BlogCard
export type {BlogCardProps}