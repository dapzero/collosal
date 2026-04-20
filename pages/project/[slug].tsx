import { useRouter } from 'next/router'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

// --- SIMULASI DATABASE PROYEK ---
// Dalam implementasi nyata, data ini biasanya diambil dari API, CMS (seperti Sanity/Strapi), atau file JSON eksternal.
const projectDatabase: Record<string, any> = {
  'desktop-app': {
    title: 'The Desktop App Landing Page',
    description: 'Something has always existed. According to physics, there can never be true physical nothingness—though there can be times when existence resembles nothing.',
    category: 'Coldstorage',
    client: 'Nicola Tesla',
    technology: 'EPS Panel',
    heroImage: '/images/screenshots/home.png',
    images: [
      { src: '/images/screenshots/desktop-performance.png', caption: 'The Desktop App Landing Page - Home Screen' },
      { src: '/images/screenshots/desktop-performance.png', caption: 'The Desktop App Landing Page - Performance' },
      { src: '/images/screenshots/desktop-performance.png', caption: 'The Desktop App Landing Page - Features' }
    ]
  },
  'mobile-app': {
    title: 'Mobile App Performance Dashboard',
    description: 'A comprehensive dashboard to monitor your mobile application analytics and performance metrics in real-time.',
    category: 'UI/UX Design',
    client: 'TechNova Solutions',
    technology: 'Figma, React Native',
    heroImage: '/images/screenshots/mobile-performance.png',
    images: [
      { src: '/images/screenshots/mobile-performance.png', caption: 'Dashboard Overview' },
      { src: '/images/screenshots/mobile-performance.png', caption: 'Analytics Breakdown' }
    ]
  }
}

const ProjectDetail = () => {
  const router = useRouter()
  // Menangkap parameter [slug] dari URL
  const { slug } = router.query

  // Mencegah error saat Next.js melakukan render pertama kali di server (saat slug belum tersedia)
  if (!router.isReady) {
    return (
      <PageTemplate title="Loading... - Collosal">
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-white">Loading...</p>
        </div>
      </PageTemplate>
    )
  }

  // Mencari data proyek berdasarkan slug
  const projectData = typeof slug === 'string' ? projectDatabase[slug] : null

  // Menangani kondisi jika slug/URL yang diketik tidak ada di dalam database
  if (!projectData) {
    return (
      <PageTemplate title="Project Not Found - Collosal">
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
          <p className="text-gray-400">Maaf, proyek yang Anda cari tidak tersedia.</p>
          <button onClick={() => router.push('/project')} className="text-primary underline mt-4">
            Kembali ke daftar Project
          </button>
        </div>
      </PageTemplate>
    )
  }

  return (
    <PageTemplate title={`${projectData.title} - Collosal`}>
      {/* --- HEADER TITLE --- */}
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJECT DETAIL"
            title={projectData.title}
          />
        </div>
      </section>
      
      <LineDivider />
      
      {/* --- HERO IMAGE & META INFO --- */}
      {/* PERBAIKAN 1: Tambahkan items-center agar pada layar besar, teks dan gambar sejajar di tengah secara vertikal */}
      <section className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 items-center">
        
        <aside data-aos="fade-up-right" className="w-full flex justify-end">
          {/* PERBAIKAN 2: Batasi ukuran maksimal gambar di layar 2K agar tidak raksasa */}
          <div className="w-full 2xl:max-w-2xl" style={{ aspectRatio: `16/9`, overflow: 'hidden', borderRadius: '0.375rem'}}>
            <img 
              src={projectData.heroImage}
              alt={projectData.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
            />
          </div>
        </aside>

        <aside className="w-full flex justify-start" data-aos="fade-up-left">
          {/* PERBAIKAN 3: Mengurung teks & bento box dalam div dengan 'max-w-xl' (maks 576px) 
              Ini memastikan teks tidak akan melebar lebih dari batas baca yang nyaman meskipun layarnya 2K/4K */}
          <div className="w-full max-w-xl grid gap-10">
            {/*
            <Text
              textStyle="SectionParagraph"
              value={projectData.description}
            />
            */}
            
            {/* DESAIN BARU: Grid 2-Kolom (Bento Box Style) */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 p-6 bg-white/[0.02] rounded-xl border border-white/5">
              <div className="flex flex-col gap-2">
                <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
                <Text value={projectData.category} textStyle="ProjectDetailValue" />
              </div>
              
              <div className="flex flex-col gap-2">
                <Text value="CLIENT" textStyle="ProjectDetailLabel" />
                <Text value={projectData.client} textStyle="ProjectDetailValue" />
              </div>
              
              <div className="flex flex-col gap-2 col-span-2">
                <Text value="TECHNOLOGY" textStyle="ProjectDetailLabel" />
                <Text value={projectData.technology} textStyle="ProjectDetailValue" />
              </div>
            </div>
          </div>
        </aside>

      </section>      
      <LineDivider />
      
      {/* --- IMAGE GALLERY --- */}
      <section className="w-full flex flex-col items-center gap-8">
        {projectData.images.map((image: any, index: number) => (
          <div key={index} className="w-full" data-aos="fade-up">
            <img
              src={image.src}
              alt={image.caption}
              className="rounded-xl bg-light/5" // Tambahkan sedikit background jika gambarnya transparan
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