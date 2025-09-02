import React from 'react'

const Footer = () => {

    const Links = [
        // {'What is Beary Local?'},
        // {'Features'},
        // {'Benefits'},
        // {'Contact'},
        // {'Support'},
        // {'Refund Policy'},
        // {'Terms and Conditions'},
        // {'Privacy Policy'}
        {"id":1,"name":"What is Beary Local?"},
        {"id":2,"name":"Features"},
        {"id":3,"name":"Benefits"},
        {"id":4,"name":"Contact"},
        {"id":5,"name":"Support"},
        {"id":6,"name":"Refund Policy"},
        {"id":7,"name":"Terms and Conditions"},
        {"id":8,"name":"Privacy Policy"},
        ]



  return (
    <>
    <footer class="bg-[#ff7622]">
  <div class="container px-[64px] py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col text-white">
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left flex-col">
      <div>
        <img width={150} height={70} src="https://wordpress-1034502-4663747.cloudwaysapps.com/wp-content/uploads/2024/06/Beary-local-2-1.svg" alt=""></img>
      </div>
      <div className='pt-[20px] pb-[24px]'>
        <h1 className='text-[26px] font-[500]'>Bring exclusive offers direct to locals!</h1>
      </div>
      <div className='flex gap-10'>
        {Links.map((link)=>{
            return(
                <>
                <div className='text-[16px] font-[500] hover:text-black cursor-pointer'>
                    {link.name}
                </div>
                </>
            )
        })}
      </div>
    </div>
  </div>
  <div class="px-[64px] bg-[#ff7622] text-white border-t border-white">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-sm text-center sm:text-left">© 2025 Beary Local. All rights reserved.
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer