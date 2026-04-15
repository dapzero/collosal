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

        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <img
              src={'/images/how-we-work-illustration.svg'}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Everything is well planned, well designed and developed wholeheartedly"
              paragraph="Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped."
              badge="HOW WE WORK"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="We're a team of designers, engineers and analysts"
                paragraph="Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results."
                badge="OUR TEAM"
              />
              <ButtonLink
                value="See Our Teams"
                href="/teams"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <img
              src={'/images/team-illustration.svg'}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Kami telah menyelesaikan banyak proyek yang menakjubkan yang tidak akan Anda percayai"
              badge="PROYEK KAMI"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="The Desktop App Landing Page"
                description="A landing page for desktop app"
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="The Mobile App Landing Page"
                description="A landing page for mobile app"
                bottomSquareSize="big"
              />
            </div>
          </div>
          <ButtonLink value="Lihat Semua Proyek" href='/project' color="white" style="light" />
        </section>
        {/* Prices */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="What do you need? Choose a service that can help you"
              badge="GET STARTED"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div data-aos="fade-up-right">
              <PricingCard
                price="1200$"
                title="UI Design"
                href='/contact'
                features={[
                  '10 design pages',
                  'Well-documented',
                  '4 revisions',
                  '$100/additional page',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <PricingCard
                price="5000$"
                title="Development"
                href='/contact'
                features={[
                  'Web & Mobile',
                  'Well-documented',
                  '8 revisions',
                  '$1000/additional page',
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="3000$"
                title="Maintenance"
                href='contact'
                features={[
                  'Daily backup',
                  '3 hours of maintenance',
                  'Including fixing',
                  '$50/additional hour',
                ]}
              />
            </div>
          </div>
        </section>
        {/* Testimonial */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="What do our clients say that we never let down?"
              badge="TESTIMONIAL"
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
