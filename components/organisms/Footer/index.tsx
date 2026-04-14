import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'
import { FiYoutube, FiFacebook, FiInstagram } from 'react-icons/fi'

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
              <Text value="SERVICES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value="Web Development"
                  href="/service/detail"
                />
                <NavLink
                  value="App Development"
                  href="/service/detail"
                />
                <NavLink value="UI Design" href="/service/detail" />
                <NavLink value="Consultation" href="/service/detail" />
                <NavLink value="Maintenance" href="/service/detail" />
                <NavLink value="Pricing" href="/pricing" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="Tentang Kami" href="/about" />
                <NavLink value="Hubungi Kami" href="/contact" />
                <NavLink value="Privacy Policy" href="/privacy-policy" />
                <NavLink value="Term of Service" href="/term-of-service" />
                <NavLink value="Jobs" href="/jobs" />
                <NavLink value="Blogs" href="/blog" />
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
                  <FiInstagram />
                  <NavLink value="LinkedIn" href="https://www.linkedin.com/company/andarumega-sentosa/" />
                </div>
                  <NavLink value="Sitemap" href="/sitemap" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
