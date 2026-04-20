import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'
import { FiYoutube, FiFacebook, FiInstagram, FiMapPin } from 'react-icons/fi'
import { FaTiktok } from "react-icons/fa"
import { IoCallOutline } from "react-icons/io5"
import { FaQuestion } from "react-icons/fa"


const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <div className="">
              <Text
                value={`Copyright © ${new Date().getFullYear()}`}
                textStyle="SectionParagraph"
              />
              <a href="https://github.com/rei1406/" target={'_blank'} rel="noreferrer">
                <Text
                  value={`Source Code by Eko Susilo`}
                  textStyle="SectionParagraph"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="PRODUK" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value="EPS Panel"
                  href="/service"
                />
                <NavLink
                  value="PUR Panel"
                  href="/service"
                />
                <NavLink 
                  value="Pintu" 
                  href="/service" 
                />
                <NavLink 
                  value="Aluminium" 
                  href="/service" 
                />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="PERUSAHAAN" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <div className="flex items-center gap-2 text-white text-oppacity-80">
                  <FaQuestion />
                  <NavLink value="Tentang Kami" href="/about" />
                </div>
                <div className="flex items-center gap-2 text-white text-oppacity-80">
                  <IoCallOutline />
                  <NavLink value="Hubungi Kami" href="/contact" />
                </div>
                <div className="flex items-center gap-2 text-white text-oppacity-80">
                  <FiMapPin />
                  <NavLink value="Lokasi Kami" href="https://maps.app.goo.gl/jKyK5VRfmYaX2KeJ6" />
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <Text value="MEDIA SOSIAL" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <div className="flex items-center gap-2 text-white text-oppacity-80">
                  <FiYoutube />
                  <NavLink value="Youtube" href="https://www.youtube.com/@andarumegasentosa1" />
                </div>
                <div className="flex items-center gap-2 text-white text-oppacity-80">
                  <FiFacebook />
                  <NavLink value="Facebook" href="https://www.facebook.com/people/Andaru-Mega-Sentosa/100091799316879/" />
                </div>
                <div className="flex items-center gap-2 text-white text-oppacity-80">
                  <FiInstagram />
                  <NavLink value="Instagram" href="https://www.instagram.com/andarumegasentosa1/" />
                </div>
                <div className="flex items-center gap-2 text-white text-oppacity-80">
                  <FaTiktok />
                  <NavLink value="Tiktok" href="https://www.tiktok.com/@pt.andaru.mega.se/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
