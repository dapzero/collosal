// import Button from 'components/atoms/Button' <- module tidak terpakai
// import InputGroup from 'components/molecules/FormGroup/InputGroup' <- module tidak terpakai
// import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup' <- module tidak terpakai
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import { FiMail, FiPhoneCall } from 'react-icons/fi'

const Contact = () => {
  return (
    <>
      <PageTemplate title='Contact - Collosal'>
        <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start" data-aos="fade-up-right">
            <div className="sm:text-center lg:text-left">
              <PageSentence
                title="Kami senang menerima pesan dari Anda, kami menunggunya."
                badge="KONTAK KAMI"
              />
            </div>
            <div className="space-y-6 min-w-0">
              <div className="break-all">
                <IconListItem
                  label="HP/WhatsApp"
                  value="0812 1000 0454"
                  icon={<FiPhoneCall />}
                />
              </div>
              <div className="break-all">
                <IconListItem
                  label="Email"
                  value="info@andarumegasentosa.com"
                  icon={<FiMail />}
                />
              </div>
            </div>
          </aside>
          {/* elemen tidak terpakai
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-down-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Nama" />
                <InputGroup label="Email" />
              </div>
              <InputGroup label="Subyek" />
              <TextAreaGroup label="Pesan" />
              <Button value="Kirim Pesan" />
            </div>
          </aside>
          */}
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
