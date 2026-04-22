import LineDivider from 'components/atoms/LineDivider'
// import TeamCard from 'components/molecules/Card/TeamCard' <- module tidak terpakai
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
// import LogoList from 'components/organisms/LogoList' <- module tidak terpakai
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
// import Image from 'next/image' <- module tidak terpakai, alternative-nya memakai class <img>
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="About - Collosal">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <img
              src='https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776247182/about-us.jpg'
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              alt="Album foto karyawan andaru mega sentosa"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="TENTANG KAMI"
            title="Solusi Sandwich Panel Terdepan di Indonesia"
          />
          
          {/* Teks deskripsi dibuat menggunakan tag HTML murni agar bisa diformat tebal, miring, dan list */}
          <div className="mt-8 text-gray-400 text-base leading-relaxed space-y-5 text-left">
            <p>
              Berbekal pengalaman selama 4 tahun di industri konstruksi, <strong>PT Andaru Mega Sentosa</strong> merupakan perusahaan manufaktur terkemuka yang berfokus pada penyediaan solusi <em>Sandwich Panel</em> (EPS & PUR) berkualitas tinggi. Didukung oleh fasilitas pabrik milik sendiri, kami memiliki kendali penuh atas proses produksi untuk memastikan setiap material yang kami hasilkan kokoh, efisien, dan tahan lama.
            </p>
            
            <p>
              Kami memiliki keahlian luas dalam mengaplikasikan <em>sandwich panel</em> untuk berbagai sektor, mulai dari bangunan prefabrikasi, rumah modular, kontainer, <em>shelter</em>, <em>Clean Room</em>, hingga sistem insulasi tingkat tinggi seperti <em>Cold Storage</em> (ruang beku). Selain panel, kami juga menyediakan solusi menyeluruh yang mencakup kebutuhan baja ringan, aluminium <em>extrusion</em>, pintu <em>cold storage</em>, hingga mesin pendingin industri.
            </p>

            <h3 className="text-white font-bold text-lg pt-2">Visi & Misi Kami</h3>
            <p>
              Kami berkomitmen untuk menjadi mitra konstruksi terpercaya di Indonesia dengan memberikan solusi <em>end-to-end</em>—mulai dari produksi material hingga layanan instalasi profesional. Kepuasan klien, ketepatan waktu, dan kualitas struktur yang presisi adalah prioritas utama kami dalam setiap proyek.
            </p>

            <h3 className="text-white font-bold text-lg pt-2">Mengapa Memilih PT Andaru Mega Sentosa?</h3>
            <p>
              Sebagai spesialis bangunan <em>knock-down</em> dan prefabrikasi, kami tidak hanya menjual material, tetapi memberikan solusi bangunan cerdas dengan keunggulan berikut:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-gray-300">Pabrikasi Mandiri:</strong> Dengan memiliki fasilitas produksi (pabrik) sendiri, kami dapat menjamin konsistensi kualitas, harga yang lebih kompetitif, serta fleksibilitas desain sesuai kebutuhan proyek Anda.
              </li>
              <li>
                <strong className="text-gray-300">Standar SNI & Bergaransi:</strong> Seluruh produk <em>sandwich panel</em> kami diproduksi dengan material berstandar SNI dan dilengkapi dengan <strong>garansi 1 tahun</strong> untuk memberikan Anda ketenangan dan kepastian kualitas.
              </li>
              <li>
                <strong className="text-gray-300">Jangkauan Seluruh Indonesia:</strong> Di mana pun proyek Anda berada, kami siap melayani pemesanan, pengiriman material, hingga jasa instalasi ahli ke seluruh pelosok Nusantara.
              </li>
              <li>
                <strong className="text-gray-300">Efisiensi Tinggi:</strong> Material kami dirancang untuk pemasangan yang cepat, anti-gempa, tahan terhadap cuaca, serta mampu menjaga kestabilan suhu ruangan secara maksimal untuk menekan biaya operasional Anda.
              </li>
            </ul>
          </div>
          
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="STATISTIK"
            title="Pencapaian Kami selama 4 Tahun"
          />
        </div>

        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          {/**
          <LogoList />
          */}
        </div>
      </section>

      {/**
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="OUR TEAMS"
            title="Meet the team! All creative people are here"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-1.webp"
              job="Founder"
              name="Albert Flores"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-2.webp"
              job="Chief Technology Officer"
              name="Devon Lane"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-3.webp"
              job="UI Designer"
              name="Darrell Steward"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-4.webp"
              job="Software Engineer"
              name="Marvin McKinney"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-5.webp"
              job="System Analyst"
              name="Floyd Miles"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-6.webp"
              job="Project Manager"
              name="Annette Black"
            />
          </div>
        </div>
      </section>
      */}

    </PageTemplate>
  )
}

export default About
