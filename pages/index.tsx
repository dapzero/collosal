import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
// import Image from 'next/image' #versi sebelummnya
import React from 'react'
// import { FiFigma, FiCode, FiBox } from 'react-icons/fi' #versi sebelummnya
import { MdOutlineDesignServices } from 'react-icons/md'
import { FaRegBuilding } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";



const Home = () => {
  return (
    <>
      <PageTemplate title="Home - Collosal">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Kami Merancang. Kami Membangun. Kami Mewujudkan."
              description="Kami PT Andaru Mega Sentosa adalah perusahaan spesialis sandwich panel yang menghadirkan solusi konstruksi terintegrasi. Dengan menggabungkan desain presisi, proses manufaktur berkualitas, dan tim pemasangan ahli, kami memastikan bangunan Anda kokoh, efisien, dan estetis."
              badge="DESAIN-PEMBANGUNAN-INSTALASI"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Hubungi Kami" href="/contact" />
            <ButtonLink
              value="Lebih Lanjut"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Desain"
              description="Perencanaan presisi adalah kunci efisiensi bangunan. Kami merancang desain teknis dan layout sandwich panel yang dioptimalkan untuk isolasi suhu, kekuatan struktur, dan estetika bangunan Anda."
              icon={<MdOutlineDesignServices />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Fabrikasi"
              description="Kami memproduksi sandwich panel dengan material berkualitas tinggi dan standar industri. Fokus kami adalah menciptakan struktur yang kokoh, tahan lama, dan memiliki kemampuan insulasi terbaik di kelasnya."
              icon={<FaRegBuilding />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Instalasi"
              description="Pemasangan dilakukan oleh tim ahli untuk memastikan sistem interlocking panel terpasang sempurna. Kami menjamin proses instalasi yang cepat, rapi, dan memenuhi standar keamanan struktur bangunan."
              icon={<GiElectric />}
            />
          </div>
        </section>

        <LineDivider />

        {/* Logo List */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Kami bekerja sama dengan vendor terpercaya"
              // description="Kami PT Andaru Mega Sentosa adalah perusahaan spesialis sandwich panel yang menghadirkan solusi konstruksi terintegrasi. Dengan menggabungkan desain presisi, proses manufaktur berkualitas, dan tim pemasangan ahli, kami memastikan bangunan Anda kokoh, efisien, dan estetis."
              badge="VENDOR KAMI"
            />
          </div>
        </section>
        <LogoList />

        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Proyek terbaru kami, kami yakin Anda akan menyukainya."
              badge="PROYEK KAMI"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="The Desktop App Landing Page"
                description="A landing page for desktop app"
                bottomSquareSize="big"
                imageSrc='/images/ui-design-illustration.svg'
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="The Mobile App Landing Page"
                description="A landing page for mobile app"
                bottomSquareSize="big"
                imageSrc='/images/ui-design-illustration.svg'
              />
            </div>
          </div>
          <ButtonLink value="Lihat Semua Proyek" href='/project' color="white" style="light" />
        </section>
        {/* Testimonial */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="Apa kata mereka terhadap kami?"
              badge="TESTIMONI"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
