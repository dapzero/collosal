import LineDivider from 'components/atoms/LineDivider'
// import Image from 'next/image' #versi sebelummnya
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <img
            src={'/images/logos/bluescope.svg'}
            width={120} height={36}
            alt="bluescope logo"
          />
        </div>
        <div className="">
          <img
            src={'/images/logos/alindo-perkasa.svg'}
            width={120} height={36}
            alt="alindo perkasa logo"
          />
        </div>
        <div className="">
          <img
            src={'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776826931/maxfos-prima_eabjba.svg'}
            width={120} height={36}
            alt="maxfos prima logo"
          />
        </div>
        <div className="">
          <img
            src={'/images/logos/kawan-listrik-indonesia.svg'}
            width={120} height={36}
            alt="kawan listrik indonesia logo"
          />
        </div>
        <div className="">
          <img
            src={'https://res.cloudinary.com/dsk1jyfib/image/upload/q_auto/f_auto/v1776826906/sutindo-chemical-indonesia_fyu4fu.svg'}
            width={120} height={36}
            alt="sutindo chemical indonesia logo"
          />
        </div>
        <div className="">
          <img
            src={'/images/logos/inti-atap-suksesindo.svg'}
            width={120} height={36}
            alt="sutindo chemical indonesia logo"
          />
        </div>
      </section>
    </>
  )
}

export default LogoList
