import { useEffect, useState } from 'react'
import car1 from '../../assets/carousel1.jpg'
import car2 from '../../assets/carousel2.jpg'
import Form from './Form'
import './HomePage.css'
import Catergories from './Catergories'
import Gallery from './Gallery'
import Joblist from './Joblist'
import Slider from './Testimonial'
import Footer from './Footer'
import { HSCarousel } from 'preline'
const HomePage = () => {
  const [text, setText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(true)
    }, 500) // show after 0.5s

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
  const timer = setTimeout(() => {
    setText(true)
  }, 5)

  // Re-initialize Flowbite/Preline carousel
  
    HSCarousel.autoInit();


  return () => clearTimeout(timer)
}, [])


  return (
    <div>
      <div
        data-hs-carousel='{
          "loadingClasses": "opacity-0",
          "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-full rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
          "isAutoPlay": true
        }'
        className="relative"
      >
        <div className="hs-carousel h-[500px] relative overflow-hidden w-full md:h-[550px] lg:h-[590px] min-h-100 bg-white z-0">
         <div className="my-[60px] md:my-[100px] hs-carousel-body absolute top-0 md:top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 ">


            {/* Slide 1 */}
            <div className="hs-carousel-slide  relative">
              <div className="relative h-full">
                {/* Dark overlay */}
                <div className="absolute h-screen top-0 mb-0 bottom-0 inset-0 bg-black/50"></div>
                <div className="relative left-4 top-1/5">
                  {/* Top line */}
                  <div className="lineH absolute top-0 left-0"></div>
                  {/* Left line */}
                  <div className="leftW absolute top-0 left-0"></div>
                </div>

                {/* Animated Text */}
                {/* Animated Text - Slide 1 */}
                <div
                  className={`absolute left-10 top-1/4 -translate-y-1/2 max-w-[60%] text-white transition-all duration-1000 ease-out 
  ${text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-15'} z-10`}
                >
                  <h2 className="carousel-text font-bold mb-4">
                    Find The Best StartUp Job That Fits You
                  </h2>
                  <p className="text-[18px] md:max-w-[70%]  md:text-lg paragraph-color">
                    We help you discover exciting opportunities that are carefully tailored to your career and goals
                  </p>
                </div>


                <img src={car1} alt="Slide 1" className="w-full h-[900px] object-cover z-10" />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="hs-carousel-slide relative">
              <div className="relative h-full">
                {/* Dark overlay */}
                <div className="absolute top-0 bottom-0 inset-0 h-screen bg-black/50"></div>
                <div className="relative left-4 top-1/5">
                  {/* Top line */}
                  <div className="lineH absolute top-0 left-0"></div>
                  {/* Left line */}
                  <div className="leftW absolute top-0 left-0"></div>
                </div>

                {/* Animated Text (same smooth effect) */}
                <div
                  className={`absolute left-10 top-1/4 -translate-y-1/2 max-w-[70%] text-white transform transition-all duration-1000 ease-out 
                  ${text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-15'} z-10`}
                >
                  <h2 className="font-bold carousel-text mb-4">
                    Find The Perfect Job That Deserves You
                  </h2>
                  <p className="paragraph-color md:max-w-[70%] text-[18px] md:text-lg">
                    You get the best job opportunities tailored to your skills, and give you experience. "we want you to grow".
                  </p>
                </div>

                <img src={car2} alt="Slide 2" className="w-full h-[900px] object-cover z-10" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className='absolute left-10 bottom-[5%] sm:bottom-[8%] md:bottom-[15%] lg:bottom-[15%] flex gap-4'>
            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent buttonbg text-white focus:outline-hidden focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 cursor-pointer hover:bg-transparent hover:border-white">
              Search A Job
            </button>
            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-white cursor-pointer text-white buttonbg2 focus:outline-hidden focus:border-white focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300">
              Find A Talent
            </button>
          </div>
        </div>

        {/* Prev Button */}
        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" viewBox="0 0 24 24">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        {/* Pagination */}
        <div className="hs-carousel-pagination justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
      </div>

      <Form />
      <Catergories />
      <Gallery />
      <Joblist />
      <Slider/>
      <Footer />
    </div>
  )
}

export default HomePage
