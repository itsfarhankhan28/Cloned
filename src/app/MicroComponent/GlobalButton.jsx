import React from 'react'

const GlobalButton = () => {
  return (
    <button className="px-5 py-3 bg-orange-400 rounded-lg font-bold text-white text-xl flex gap-1 cursor-pointer shadow-[0px_7px_12px_-3px_rgba(8,8,8,0.66)] ">Get Started Now 
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clipPath="url(#clip0_76_55)"><path d="M6 18L18 6M18 6H10M18 6V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_76_55"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
        </span>
    </button>
  )
}

export default GlobalButton