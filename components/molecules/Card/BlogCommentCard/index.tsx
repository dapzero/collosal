import Text from 'components/atoms/Text'
// import Image from 'next/image' #versi sebelummnya
import React from 'react'
interface BlogCommentCardProps {
  avatarSrc: string
  name: string
  time: string
  content: string
}
const BlogCommentCard = ({
  avatarSrc,
  content,
  name,
  time,
}: BlogCommentCardProps) => {
  return (
    <div className="w-full pb-12 border-b border-borderLight flex gap-6">
      <div className="">
        <div className="w-[50px] h-[50px] relative">
          <img src={'/out/images/brand.svg'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='Commentator Avatar' />
        </div>
      </div>
      <div className="space-y-5">
        <div className="space-y-1">
          <Text textStyle="CommentName" value={name} />
          <Text textStyle="CommentTime" value={time} />
        </div>
        <Text textStyle="CommentContent" value={content} />
      </div>
    </div>
  )
}

export default BlogCommentCard
