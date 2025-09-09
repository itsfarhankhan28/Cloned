import React from 'react'
import Image from 'next/image'
import GlobalSVG from './GlobalSVG'

const GlobalCard = ({src,contentTitle,contentPara1,contentPara2}) => {
  return (
    <>
    <div className='flex flex-col gap-3 md:w-[400px]'>
        <div>
            <img src={`${src}`} className='md:w-[384px] md:h-[240px]' alt="" />
        </div>
        <div className='flex gap-3'>
            <div>
                <span><GlobalSVG/></span>
            </div>
            <div>
                <h1 className='md:text-[24px] text-[20px] font-[600] text-white'>
                    {contentTitle}						
                </h1>
                <p className='md:text-[16px] text-[14px] text-white font-[sans-serif]'>
                    <span className='text-[#FF7622]'>{contentPara1}</span> {contentPara2}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default GlobalCard