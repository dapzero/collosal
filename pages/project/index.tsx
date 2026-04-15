// import Button from 'components/atoms/Button' <- button dihapus karena belum ada fungsionalitas load more, dan untuk sementara tidak diperlukan
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React, { useState } from 'react'
import randomString from 'utils/randomString'

const Project = () => {
  // <- State untuk menyimpan kategori yang dipilih
  const [activeCategory, setActiveCategory] = useState('all') // <- default ke 'all' untuk menampilkan semua project

  interface Project {
    title: string
    description: string
    imageSrc?: string
    category: 'all' | 'app' | 'ui-design' | 'other' // <- tambahkan field kategori pada interface Project
  }

  const projectList: Project[] = [
    {
      title: 'The Mobile App Landing Page',
      description: 'A landing page for mobile app',
      imageSrc: '/images/screenshots/home.png',
      category: 'ui-design', // <- tambahkan kategori pada setiap project
    },
    {
      title: 'The Desktop App Landing Page',
      description: 'A landing page for desktop app',
      imageSrc: '/images/screenshots/home.png',
      category: 'app', // <- tambahkan kategori pada setiap project
    },
    {
      title: 'Simple Mobile Blog App',
      description: 'A blog app on mobile platform',
      imageSrc: '/images/screenshots/home.png',
      category: 'app', // <- tambahkan kategori pada setiap project      
    },
    {
      title: 'Realtime Chat App UI Design',
      description: 'A UI design for realtime chat app',
      imageSrc: '/images/development-illustration.svg',
      category: 'ui-design', // <- tambahkan kategori pada setiap project
    },
  ]

  // <- Logika Filtering: jika activeCategory adalah 'all', tampilkan semua project, jika tidak, filter berdasarkan kategori
  const filtered = activeCategory === 'all'
    ? projectList
    : projectList.filter((p) => p.category === activeCategory)
  

  return (
    <PageTemplate title="Project - Collosal">
      <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <aside
          className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
          data-aos="fade-right"
        >
          <div className="text-center md:text-left">
            <PageSentence
              badge="PROYEK-PROYEK KAMI"
              title="Beberapa proyek yang telah kami selesaikan, kami yakin Anda akan menyukainya."
            />
          </div>
        </aside>
        <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
          <Select
            options={[
              { label: 'Semua Proyek', value: 'all' },
              { label: 'App', value: 'app' },
              { label: 'UI Design', value: 'ui-design' },
              { label: 'Other', value: 'other' },
            ]}
            // <- kirim nilai yang dipilih ke state
            onChange={(e) => {
              const target = e.target as HTMLSelectElement
              setActiveCategory(target.value)
            }}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        {filtered.length > 0 ? (
          <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
            {filtered.map((project) => {
              return (
                <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                  />
                </div>
              )
            })}
          </div>
        ) : (
          // <- tampil pesan jika kategori kosong
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              Belum ada project dalam kategori ini.
            </p>
          </div>
        )}
        {/* <Button value="Load More" color="white" style="light" /> */}
      </section>
    </PageTemplate>
  )
}

export default Project
