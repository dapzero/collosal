import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
// import Image from 'next/image' #versi sebelummnya
import React from 'react'

const HowWeWork = () => {
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="Alur Kerja Kami"
            title="Proses kerjasama dengan kami sangatlah mudah"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <img
              src={'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776607646/step01.svg'}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              alt='diskusi dengan seseorang'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 01"
            title={`Mari bicarakan kebutuhan Anda`}
            paragraph={"Pada bagian ini anda menjelaskan kebutuhan dan masalah yang Anda hadapi kepada kami, lalu kami akan memberikan solusi terbaik untuk kebutuhan Anda. <br> <br> Pada tahap ini, kita akan berdiskusi dan berkomunikasi secara intensif untuk memastikan bahwa semua kebutuhan dan masalah yang Anda hadapi dapat kami pahami dengan baik."}
          />
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-right">
          <SectionSentence
            badge="STEP 02"
            title={`Menjalin kerjasama diatas kertas`}
            paragraph="Setelah semua kebutuhan dan masalah yang Anda hadapi sudah kami pahami dengan baik, maka kita akan membuat kontrak kerjasama yang berisi semua hal yang sudah kita diskusikan sebelumnya. <br> <br> Pada tahap ini, kita akan membuat kontrak kerjasama yang berisi semua hal yang sudah kita diskusikan sebelumnya, termasuk solusi yang akan kami berikan, timeline pengerjaan, dan biaya yang harus Anda bayarkan."
          />
        </aside>
        <aside className="w-full" data-aos="fade-up-left">
          <div className="w-full h-[410px] relative">
            <img
              src={'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776607647/step02.svg'}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              alt='pembuatan kontrak kerja'
            />
          </div>
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <img
              src={'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776607776/step03.svg'}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              alt='hasil akhir'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 03"
            title={`Perjanjian dibuat, Proyek dimulai`}
            paragraph="Setelah kontrak kerjasama sudah dibuat, maka pengerjaan proyek akan segera dimulai. <br> <br> Pada tahap ini, kita akan memulai proyek sesuai dengan timeline yang sudah kita buat sebelumnya, dan kami akan memberikan update secara berkala kepada Anda mengenai perkembangan proyek yang sedang kami kerjakan."
          />
        </aside>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default HowWeWork
