import React from 'react'
import GlobalButton from '../MicroComponent/GlobalButton'

const SectionFive = () => {
  return (
    <div className='md:mb-[96px] mb-[50px] md:px-[80px] px-[20px]'>
        <div className='border border-black bg-gray-800 flex justify-center items-center rounded-3xl'>
            <div className='md:py-[64px] py-[50px] flex items-center flex-col justify-center md:gap-2 gap-5'>
                <div className='text-white text-center md:text-[29px] text-[20px] font-[400]'>
                    Unlock Your <br/>
                    Business Potential with
                    <h1 className='md:text-[56px] text-[25px] font-[600] text-white'>Beary Local</h1>
                </div>
                <div>
                    <GlobalButton/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFive