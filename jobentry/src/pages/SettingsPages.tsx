import React from 'react'
import Footer from './Home/Footer'
import Joblist from './Home/Joblist'
import { Link } from 'react-router-dom'
import carousel from '../assets/carousel1.jpg'
const SettingsPages = () => {
  return (
    <div>
 <div
        data-hs-carousel='{
          "loadingClasses": "opacity-0",
          "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
          "isAutoPlay": true
        }'
        className="relative overflow-hidden"
      >
        <div className="hs-carousel relative flex w-screen overflow-hidden z-0 h-screen">

          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap w-full h-[80%] transition-transform duration-700">
            <div className='absolute top-0 bg-black/65 w-full h-full'></div>
            <div className="hs-carousel-slide overflow-hidden w-screen h-screen">
              <div className="flex overflow-hidden justify-center items-center w-full h-[80%] dark:bg-neutral-900">
                <img
                  src={carousel}
                  alt="carousel1"
                  className="w-full overflow-hidden h-full object-cover"
                />

                <div className='absolute text-white font-bold justify-end text-center  flex gap-5'>
                  <Link
                    to="/" className='buttonbg rounded-sm py-1 px-4 border-2'
                  >Home</Link>
                  <Link
                    to="/servicepage"
                    className='buttonbg px-4 py-1 rounded-sm border-2'
                  >Service</Link>
                  <Link
                    to="/dashboardpage"
                    className='buttonbg px-4 py-1 rounded-sm border-2'
                  >Jobs</Link>
                </div>
              </div>
            </div>
            {/* You can add more slides here */}
          </div>
        </div>



        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 gap-x-2"></div>
      </div>

      
      <Joblist />
      <Footer />
    </div>
  )
}

export default SettingsPages