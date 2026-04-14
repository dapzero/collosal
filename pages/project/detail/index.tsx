// import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
// import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import React from 'react'
// import randomString from 'utils/randomString'

const ProjectDetail = () => {
  const [activeImage, setActiveImage] = React.useState<string | null>(null)
    const projectImages = [
      {
        src: '/images/screenshots/home.png',
        caption: 'The Desktop App Landing Page - Home Screen',
      },
      {
        src: '/images/screenshots/home.png',
        caption: 'The Desktop App Landing Page - Home Screen',
      },
      {
        src: '/images/screenshots/home.png',
        caption: 'The Desktop App Landing Page - Home Screen',
      }
    ]

  return (
    <PageTemplate title='Project Detail - Collosal'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Desktop App Landing Page"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
          <div style={{ aspectRatio: `16/9`, overflow: 'hidden', borderRadius: '0.375rem'}}>
            <img 
              src="/images/screenshots/home.png"
              alt="The Desktop App Landing Page"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top' }}
            />
          </div>
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="Something has always existed. According to physics, there can never be true physical nothingness—though there can be times when existence resembles nothing."
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
              <Text value="Development" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="Acme, Inc" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="TECHNOLOGY" textStyle="ProjectDetailLabel" />
              <Text
                value="JavaScript, HTML, CSS"
                textStyle="ProjectDetailValue"
              />
            </div>
          </div>
        </aside>
      </section>
      <LineDivider />
      
      <section className="w-full flex flex-col items-center gap-8">

        {projectImages.map((image, index) => (
          <div key={index} className="w-full" data-aos="fade-up">
            <img
              src={image.src}
              alt={image.caption}
              className="rounded-xl"
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
            {image.caption && (
              <p className="text-center text-sm text-gray-400 mt-3">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </section>
    </PageTemplate>
  )
}

export default ProjectDetail
