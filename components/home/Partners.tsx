import Image from 'next/image'
import React from 'react'

function Partners() {
  return (
    <div className=' flex w-full bg-primary py-14 justify-center items-center'>
      <div className=' flex w-4/5 flex-col gap-6 md:flex-row items-center justify-between'>
        <div className='  text-center font-light text-white text-2xl w-[400px]'>
        Trusted by leading enterprises,
        startups, and organizations
        </div>

        <div className=' flex flex-col md:flex-row gap-5'>
    <div>
              <Image src="/icons/partner1.svg" alt="" width={118.5} height={52}  className=""/>
    </div>
    <div>
              <Image src="/icons/partner2.svg" alt="" width={118.5} height={52}  className=""/>
    </div>
    <div>
              <Image src="/icons/partner3.svg" alt="" width={118.5} height={52}  className=""/>
    </div>
    <div>
              <Image src="/icons/partner4.svg" alt="" width={118.5} height={52}  className=""/>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Partners