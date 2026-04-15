import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import Image from 'next/image'

const EpsSpecifications = [
  { label: 'Steel Skins', value: 'Prepainted Steel with Corrosion Resistant Alloy (55% Aluminum, 43.5% Zinc and 1.5% Silicone)' },
  { label: 'Steel Brand', value: 'Bluescope' },
  { label: 'Coating', value: 'AZ70, AZ100 and AZ100 Antibacterial' },
  { label: 'Application', value: 'Wall, Ceiling, Door and Roof' },
  { label: 'Steel Thickness', value: '0.35 BMT and 0.45 BMT' },
  { label: 'Panel Thickness', value: '50mm, 75mm, 100mm and 150mm' },
  { label: 'Join System', value: 'Slip Joint' },
  { label: 'Core', value: 'Expanded Polystyrene (EPS)' },
  { label: 'Density', value: '12 - 15 kg/m³' },
  { label: 'Protection', value: 'Fire Retardant and Water Resistant' },
  { label: 'Width Dimension', value: '1185mm (Wall), 1000mm (Roof)' },
  { label: 'Length Dimension', value: 'Up to 12000mm/modul' },
  { label: 'Usage', value: "Clean Room, Laboratory Room, Medicine Warehouse, Modular Operating Theater (MOT), Radiology Room, Prefab Building, Modular Building, Warehouse and Factory Partition, Packaging Room, Sparepart Room, Worker's Mess, Container Office, and many more." },
]

const PurSpecifications = [
  { label: 'Steel Skins', value: 'Prepainted Steel with Corrosion Resistant Alloy (55% Aluminum, 43,5% Zinc and 1,5% Silicone).' },
  { label: 'Steel Brand', value: 'Bluescope' },
  { label: 'Coating', value: 'AZ70, AZ100 and AZ100 Antibacterial' },
  { label: 'Application', value: 'Wall, Ceiling, Door and Floor Slab' },
  { label: 'Steel Thickness', value: '0.45 BMT' },
  { label: 'Panel Thickness', value: '50mm, 75mm, 100mm and 150mm' },
  { label: 'Join System', value: 'Slip Joint and Camlock' },
  { label: 'Core', value: 'Expanded Polyurethane (PU)' },
  { label: 'Density', value: '43 - 48 kg/m³' },
  { label: 'Protection', value: 'Fire Retardant and Water Resistant' },
  { label: 'Width Dimension', value: '1200mm (Wall), 1000mm (Roof)' },
  { label: 'Length Dimension', value: 'Up to 12000mm/modul' },
  { label: 'Usage', value: "ABF Room, Cold Storage Room, Chiller Room, Machine Room, Electrical Panel Room, Oven Room, Drying Room, and many more." },
]

const Service = () => {
  return (
    <PageTemplate title="Product - Collosal">
      <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-12">
        <div className="w-full max-w-4xl text-center" data-aos="fade-up">
          <PageSentence
            badge="OUR PRODUCTS"
            title="Premium Insulated Panel Solutions"
            description="We provide high-quality insulated panels designed for durability, efficiency, and various industrial applications."
          />
        </div>
      </section>

      <LineDivider />

      {/* Insulated EPS Section (Replacing UI Design) */}
      <section className="w-full flex flex-col gap-10 mt-16 mb-24">
        <div className="flex flex-col xl:flex-row gap-10" data-aos="fade-up">
          
          {/* Left Side: Product Identity, Colors, & Skins */}
          <div className="w-full xl:w-1/3 flex flex-col gap-6">
            
            {/* Title Badge */}
            <div className="bg-light p-8 rounded-[10px] border border-borderLight shadow-sm">
              <div className="border-l-4 border-blue-600 pl-4">
                <Text value="Insulated" textStyle="PricingSubtitle" />
                <h2 className="text-2xl font-bold text-white mt-1">Expanded Polystyrene (EPS)</h2>
              </div>
            </div>

            {/* Product Image Placeholder */}
            <div className="w-full relative h-[250px] bg-light rounded-[10px] border border-borderLight flex items-center justify-center p-4">
                <img
                    src={'/images/EPS-PRODUCT.svg'} // Ganti dengan path gambar produk yang sebenarnya
                    alt="Insulated EPS Panel"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Color & Skin Variants */}
            <div className="bg-light p-8 rounded-[10px] border border-borderLight flex flex-col gap-8">
              
              {/* Colors */}
              <div>
                <div className="bg-blue-600 text-white text-center py-2 rounded-md font-bold mb-6">
                  Color
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-[#FFFFFF] rounded-xl border-4 border-gray-400 flex items-center justify-center text-xs font-bold text-black">AZ70</div>
                      <Text value="Cotton White" textStyle="PricingDetail" />
                   </div>
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-[#6A6A6A] rounded-xl border-4 border-gray-600 flex items-center justify-center text-xs font-bold text-black">AZ100</div>
                      <Text value="Ampupu Grey" textStyle="PricingDetail" />
                   </div>
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-[#919BA4] rounded-xl border-4 border-gray-500 flex items-center justify-center text-xs font-bold text-black text-center leading-tight">AZ100</div>
                      <Text value="Geranium Antibacterial" textStyle="PricingDetail" />
                   </div>
                </div>
                <p className="text-[10px] text-gray-500 text-center mt-5 italic">*Warna hanya sebagai ilustrasi</p>
              </div>

              {/* Skins */}
              <div>
                <div className="bg-blue-600 text-white text-center py-2 rounded-md font-bold mb-6">
                  Skin Profile
                </div>
                <div className="flex justify-center gap-12 text-center">
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-14 bg-blue border-2 border-borderLight rounded-lg flex flex-col justify-center items-center gap-[6px]">
                        <div className="w-10 h-[2px] bg-gray-400"></div>
                        <div className="w-10 h-[2px] bg-gray-400"></div>
                      </div>
                      <Text value="Flat" textStyle="PricingDetail" />
                   </div>
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-14 bg-blue border-2 border-borderLight rounded-lg flex flex-col justify-center items-center">
                        <svg className="w-12 h-6 text-gray-400" viewBox="0 0 48 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter">
                          {/* Top Skin Profile */}
                          {/* <path d="M 2 4 H 12 V 10 H 18 V 4 H 30 V 10 H 36 V 4 H 46" /> */}
                          {/* Bottom Skin Profile */}
                          <path d="M 2 12 H 12 V 6 H 18 V 12 H 30 V 6 H 36 V 12 H 46" />
                        </svg>
                      </div>
                      <Text value="Wave" textStyle="PricingDetail" />
                   </div>
                </div>
                <p className="text-[10px] text-gray-500 text-center mt-5 italic">*Garis hanya sebagai ilustrasi</p>
              </div>
            </div>
          </div>

          {/* Right Side: Specifications Table */}
          <div className="w-full xl:w-2/3 bg-light p-8 lg:p-10 rounded-[10px] border border-borderLight">
            <h3 className="text-2xl font-bold text-blue-500 mb-8">Specifications</h3>
            
            <div className="flex flex-col">
              {EpsSpecifications.map((spec, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-2 md:gap-6 py-4 border-b border-borderLight last:border-0 hover:bg-[#2A2B30] transition-colors px-2 rounded-md"
                >
                  <div className="flex items-start w-full md:w-[220px] lg:w-[260px] shrink-0">
                    <div className="font-semibold border-l-4 border-blue-600 pl-3 flex-1">
                        <Text value={spec.label} textStyle="PricingDetail" />
                    </div>
                    <div className="hidden md:block text-gray-500 ml-4 mt-1">:</div>
                  </div>
                  
                  <div className="w-full mt-1 md:mt-0 md:pl-6">
                    <Text value={spec.value} textStyle="PricingDetail" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      
      <LineDivider />

      {/* Insulated EPS Section (Replacing UI Design) */}
      <section className="w-full flex flex-col gap-10 mt-16 mb-24">
        <div className="flex flex-col xl:flex-row gap-10" data-aos="fade-up">
          
          {/* Left Side: Product Identity, Colors, & Skins */}
          <div className="w-full xl:w-1/3 flex flex-col gap-6">
            
            {/* Title Badge */}
            <div className="bg-light p-8 rounded-[10px] border border-borderLight shadow-sm">
              <div className="border-l-4 border-blue-600 pl-4">
                <Text value="Insulated" textStyle="PricingSubtitle" />
                <h2 className="text-2xl font-bold text-white mt-1">Polyurethane (PUR)</h2>
              </div>
            </div>

            {/* Product Image Placeholder */}
            <div className="w-full relative h-[250px] bg-light rounded-[10px] border border-borderLight flex items-center justify-center p-4">
                <img
                    src={'/images/PUR-PRODUCT.svg'} // Ganti dengan path gambar produk yang sebenarnya
                    alt="Insulated PUR Panel"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Color & Skin Variants */}
            <div className="bg-light p-8 rounded-[10px] border border-borderLight flex flex-col gap-8">
              
              {/* Colors */}
              <div>
                <div className="bg-blue-600 text-white text-center py-2 rounded-md font-bold mb-6">
                  Color
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-[#FFFFFF] rounded-xl border-4 border-gray-400 flex items-center justify-center text-xs font-bold text-black">AZ70</div>
                      <Text value="Cotton White" textStyle="PricingDetail" />
                   </div>
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-[#6A6A6A] rounded-xl border-4 border-gray-600 flex items-center justify-center text-xs font-bold text-black">AZ100</div>
                      <Text value="Ampupu Grey" textStyle="PricingDetail" />
                   </div>
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-[#919BA4] rounded-xl border-4 border-gray-500 flex items-center justify-center text-xs font-bold text-black text-center leading-tight">AZ100</div>
                      <Text value="Geranium Antibacterial" textStyle="PricingDetail" />
                   </div>
                </div>
                <p className="text-[10px] text-gray-500 text-center mt-5 italic">*Warna hanya sebagai ilustrasi</p>
              </div>

              {/* Skins */}
              <div>
                <div className="bg-blue-600 text-white text-center py-2 rounded-md font-bold mb-6">
                  Skin Profile
                </div>
                <div className="flex justify-center gap-12 text-center">
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-14 bg-blue border-2 border-borderLight rounded-lg flex flex-col justify-center items-center gap-[6px]">
                        <div className="w-10 h-[2px] bg-gray-400"></div>
                        <div className="w-10 h-[2px] bg-gray-400"></div>
                      </div>
                      <Text value="Flat" textStyle="PricingDetail" />
                   </div>
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-14 bg-blue border-2 border-borderLight rounded-lg flex flex-col justify-center items-center gap-1">
                        <svg className="w-12 h-6 text-gray-400" viewBox="0 0 48 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter">
                          {/* Top Skin Profile */}
                          {/* <path d="M 2 4 H 12 V 10 H 18 V 4 H 30 V 10 H 36 V 4 H 46" /> */}
                          {/* Bottom Skin Profile */}
                          <path d="M 2 12 H 12 V 6 H 18 V 12 H 30 V 6 H 36 V 12 H 46" />
                        </svg>
                      </div>
                      <Text value="Wave" textStyle="PricingDetail" />
                   </div>
                </div>
                <p className="text-[10px] text-gray-500 text-center mt-5 italic">*Garis hanya sebagai ilustrasi</p>
              </div>
            </div>
          </div>

          {/* Right Side: Specifications Table */}
          <div className="w-full xl:w-2/3 bg-light p-8 lg:p-10 rounded-[10px] border border-borderLight">
            <h3 className="text-2xl font-bold text-blue-500 mb-8">Specifications</h3>
            
            <div className="flex flex-col">
              {PurSpecifications.map((spec, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-2 md:gap-6 py-4 border-b border-borderLight last:border-0 hover:bg-[#2A2B30] transition-colors px-2 rounded-md"
                >
                  <div className="flex items-start w-full md:w-[220px] lg:w-[260px] shrink-0">
                    <div className="font-semibold border-l-4 border-blue-600 pl-3 flex-1">
                        <Text value={spec.label} textStyle="PricingDetail" />
                    </div>
                    <div className="hidden md:block text-gray-500 ml-4 mt-1">:</div>
                  </div>
                  
                  <div className="w-full mt-1 md:mt-0 md:pl-6">
                    <Text value={spec.value} textStyle="PricingDetail" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      

    </PageTemplate>
  )
}

export default Service