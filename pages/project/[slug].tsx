import { useRouter } from 'next/router'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

// --- SIMULASI DATABASE PROYEK ---
// Dalam implementasi nyata, data ini biasanya diambil dari API, CMS (seperti Sanity/Strapi), atau file JSON eksternal.
const projectDatabase: Record<string, any> = {
  'kantin-parung': {
    title: 'Proyek Kantin Parung',
    description: '.',
    category: 'Bangunan',
    client: 'Parung',
    technology: 'EPS Panel',
    location: 'Bogor',
    heroImage: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247171/bogor-kantin_parung-06.jpg',
    images: [
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247165/bogor-kantin_parung-01.jpg', caption: 'Kantin Parung - Bagian 01' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247166/bogor-kantin_parung-02.jpg', caption: 'Kantin Parung - Bagian 02' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247168/bogor-kantin_parung-03.jpg', caption: 'Kantin Parung - Bagian 03' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247169/bogor-kantin_parung-04.jpg', caption: 'Kantin Parung - Bagian 04' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247169/bogor-kantin_parung-05.jpg', caption: 'Kantin Parung - Bagian 05' },
    ]
  },
  'snack-citeureup': {
    title: 'Proyek Pabrik Snack Citeureup',
    description: '.',
    category: 'Bangunan',
    client: 'Citeureup',
    technology: 'EPS Panel',
    location: 'Bogor',
    heroImage: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247153/bogor-pabrik_snack_citeureup-05.jpg',
    images: [
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247149/bogor-pabrik_snack_citeureup-01.jpg', caption: 'Pabrik Snack Citeureup - Bagian 01' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247150/bogor-pabrik_snack_citeureup-02.jpg', caption: 'Pabrik Snack Citeureup - Bagian 02' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247151/bogor-pabrik_snack_citeureup-03.jpg', caption: 'Pabrik Snack Citeureup - Bagian 03' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247152/bogor-pabrik_snack_citeureup-04.jpg', caption: 'Pabrik Snack Citeureup - Bagian 04' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247154/bogor-pabrik_snack_citeureup-06.jpg', caption: 'Pabrik Snack Citeureup - Bagian 05' },
    ]
  },
  'pabrik-roti': {
    title: 'Proyek Pabrik Roti',
    description: '.',
    category: 'Pabrik',
    client: 'Surya Tsabat Mandiri',
    technology: 'EPS Panel',
    location: 'Lampung',
    heroImage: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247134/lampung-pabrik_roti-02.jpg',
    images: [
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247132/lampung-pabrik_roti-01.jpg', caption: 'Pabrik Roti - Bagian 01' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247136/lampung-pabrik_roti-03.jpg', caption: 'Pabrik Roti - Bagian 02' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247139/lampung-pabrik_roti-04.jpg', caption: 'Pabrik Roti - Bagian 03' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247141/lampung-pabrik_roti-05.jpg', caption: 'Pabrik Roti - Bagian 04' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247143/lampung-pabrik_roti-06.jpg', caption: 'Pabrik Roti - Bagian 05' },
    ]
  },
  'pabrik-budidaya-ikan-laut': {
    title: 'Proyek Pabrik Budidaya Ikan Laut',
    description: '.',
    category: 'Pabrik',
    client: '',
    technology: 'EPS Panel',
    location: 'Tangerang',
    heroImage: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247162/tangerang-budidaya_ikan_laut-04.jpg',
    images: [
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247159/tangerang-budidaya_ikan_laut-01.jpg', caption: 'Pabrik Budidaya Ikan Laut - Bagian 01' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247160/tangerang-budidaya_ikan_laut-02.jpg', caption: 'Pabrik Budidaya Ikan Laut - Bagian 02' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247161/tangerang-budidaya_ikan_laut-03.jpg', caption: 'Pabrik Budidaya Ikan Laut - Bagian 03' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247163/tangerang-budidaya_ikan_laut-05.jpg', caption: 'Pabrik Budidaya Ikan Laut - Bagian 04' },
      { src: 'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247164/tangerang-budidaya_ikan_laut-06.jpg', caption: 'Pabrik Budidaya Ikan Laut - Bagian 05' },
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
                <Text value="KATEGORI" textStyle="ProjectDetailLabel" />
                <Text value={projectData.category} textStyle="ProjectDetailValue" />
              </div>
              
              <div className="flex flex-col gap-2">
                <Text value="KLIEN" textStyle="ProjectDetailLabel" />
                <Text value={projectData.client} textStyle="ProjectDetailValue" />
              </div>
              
              <div className="flex flex-col gap-2 col-span-2">
                <Text value="TEKNOLOGI" textStyle="ProjectDetailLabel" />
                <Text value={projectData.technology} textStyle="ProjectDetailValue" />
              </div>

              <div className="flex flex-col gap-2">
                <Text value="LOKASI" textStyle="ProjectDetailLabel" />
                <Text value={projectData.location} textStyle="ProjectDetailValue" />
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