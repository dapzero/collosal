import LineDivider from 'components/atoms/LineDivider'
// import Image from 'next/image' #versi sebelummnya
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <img
            src={'/images/bluescope-logo.svg'}
            width={120} height={36}
            alt="bluescope logo"
          />
        </div>
      </section>
    </>
  )
}

export default LogoList
