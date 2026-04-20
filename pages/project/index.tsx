// import Button from 'components/atoms/Button' <- button dihapus karena belum ada fungsionalitas load more, dan untuk sementara tidak diperlukan
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React, { useState } from 'react'
import randomString from 'utils/randomString'
import Link from 'next/link' // <- Import Link dari Next.js

const Project = () => {
  // <- State untuk menyimpan kategori yang dipilih
  const [activeCategory, setActiveCategory] = useState('all') // <- default ke 'all' untuk menampilkan semua project

  interface Project {
    title: string
    description: string
    imageSrc?: string
    category: 'all' | 'bangunan' | 'pabrik' | 'coldstorage' | 'other' // <- tambahkan field kategori pada interface Project
  }

  const projectList = [
    {
      title: 'Proyek Kantin Parung',
      slug: 'kantin-parung',
      description: 'Pembangunan Kantin memakai Panel EPS',
      imageSrc: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247171/kantin-parung-06.jpg',
      category: 'bangunan', // <- tambahkan kategori pada setiap project
    },
    {
      title: 'Proyek Pabrik Snack Citeureup',
      slug: 'snack-citeureup',
      description: 'Pembangunan tempat penyimpan snack memakai Panel EPS',
      imageSrc: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247153/bogor-pabrik_snack_citeureup-05.jpg',
      category: 'bangunan', // <- tambahkan kategori pada setiap project
    },
    {
      title: 'Proyek Pabrik Roti',
      slug: 'pabrik-roti',
      description: 'Pembangunan Pabrik Roti memakai Panel EPS',
      imageSrc: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247134/lampung-pabrik_roti-02.jpg',
      category: 'pabrik', // <- tambahkan kategori pada setiap project      
    },
    {
      title: 'Proyek Pabrik Budidaya Ikan Laut',
      slug: 'pabrik-budidaya-ikan-laut',
      description: 'Pembangunan Pabrik tempat Budidaya Ikan Laut memakai Panel EPS',
      imageSrc: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247162/tangerang-budidaya_ikan_laut-04.jpg',
      category: 'pabrik', // <- tambahkan kategori pada setiap project
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
              { label: 'Bangunan', value: 'bangunan' },
              { label: 'Pabrik', value: 'pabrik' },
              { label: 'Coldstorage', value: 'coldstorage' },
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
                <div className="basis-full lg:basis-1/2" key={project.slug} data-aos="zoom-in-up">
                  <Link href={`/project/${project.slug}`}>
                    <div className="cursor-pointer transition-transform hover:scale-105">
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc}
                      />
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        ) : (
          // <- tampil pesan jika kategori kosong
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              Belum ada proyek dalam kategori ini.
            </p>
          </div>
        )}
        {/* <Button value="Load More" color="white" style="light" /> */}
      </section>
    </PageTemplate>
  )
}

export default Project
