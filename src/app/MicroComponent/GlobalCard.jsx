import React from 'react'
import Image from 'next/image'
import GlobalSVG from './GlobalSVG'

const GlobalCard = ({src,contentTitle,contentPara1,contentPara2}) => {
  return (
    <>
    <div className='flex flex-col gap-3 w-[400px]'>
        <div>
            {/* <Image
            src={`${src}`}
            width={384}
            height={240}
            alt='image'
            /> */}
            <img src={`${src}`} className='md:w-[384px] md:h-[240px]' alt="" />
        </div>
        <div className='flex gap-3'>
            <div>
                <span><GlobalSVG/></span>
            </div>
            <div>
                <h1 className='md:text-[24px] text-[20px] text-white'>
                    {contentTitle}						
                </h1>
                <p className='md:text-[16px] text-[14px] text-white'>
                    <span className='text-[#FF7622]'>{contentPara1}</span> {contentPara2}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default GlobalCard