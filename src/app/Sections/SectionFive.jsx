import React from 'react'
import GlobalButton from '../MicroComponent/GlobalButton'

const SectionFive = () => {
  return (
    <div className='mb-[96px] px-[80px]'>
        <div className='border border-black bg-gray-800 flex justify-center items-center rounded-3xl'>
            <div className='py-[64px] flex items-center flex-col justify-center gap-2'>
                <div className='text-white text-center text-[29px] font-[400]'>
                    Unlock Your <br/>
                    Business Potential with
                    <h1 className='text-[56px] font-[600] text-white'>Beary Local</h1>
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