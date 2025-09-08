import { useRef, useState, useEffect } from 'react'
import about1 from '../../img/about-1.jpg';
import about2 from '../../img/about-2.jpg';
import about3 from '../../img/about-3.jpg';
import about4 from '../../img/about-4.jpg'
import './HomePage.css'
const Gallery = () => {

    const [section1, setSection1] = useState(false);
    const [section2, setSection2] = useState(false);
    const [section3, setSection3] = useState(false)

    const setRef = useRef(null);
    const setRef2 = useRef(null);
    const setRef3 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === setRef.current) setSection1(entry.isIntersecting);
                if (entry.target === setRef2.current) setSection2(entry.isIntersecting);
                if (entry.target === setRef3.current) setSection3(entry.isIntersecting);
            });
        }, {
            threshold: 0.3
        }        
        );

        if(setRef.current) observer.observe(setRef.current);
        if(setRef2.current) observer.observe(setRef2.current);
        if(setRef3.current) observer.observe(setRef3.current);

        return() => observer.disconnect()
    }, [])
    return (
        <div>
            <h1 ref={setRef}
                className={`text-center p-5 text-2xl md:text-[40px] text-gray-800 font-bold ${section1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-500 transition-all ease-in-out`}
            >About us</h1>

            <div className='w-[100%] p-3  md:w-[90%] my-[50px] gap-20 grid md:grid-cols-2 mx-auto'>
                <div ref={setRef2} className={`relative rounded-sm shadow-parent w-[100%] mx-auto ${section2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} duration-500 transition-all ease-in-out`}>
                    <div className='absolute  rounded-sm bg-black/25 top-0 w-full h-full '></div>

                    <div className="w-[80%] py-10 mx-auto gallery  grid grid-cols-2 gap-4">
                        <div className="grid gap-4">
                            <div className='gallery-shadow grid gap-4 grid-cols-2'>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={about1} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={about2} alt="" />
                                </div>

                            </div>
                            <div>
                                <img className="gallery-shadow h-auto max-w-full rounded-lg" src={about4} alt="" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-[50px] sm:mt-[63px]">
                            <div>
                                <img className="gallery-shadow h-auto max-w-full rounded-lg" src={about3} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <div ref={setRef3} className={`w-[80%] duration-800 ease-in-out transition-all mx-auto ${section3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className='md:text-3xl text-[20px] mb-3 font-bold md:my-5  text-gray-800'>
                        We Help To Get The Best Job And Find Telant
                    </h1>

                    <div className='text-[12px] md:text-[13px]'>
                        <p>
                            At JobEntry, we believe opportunities should be closer to people. That’s why our goal is simple: to connect you to jobs of any kind, anytime, anywhere and linking you out to reliable platforms where you can apply immediately. No confusion, no wasted time — just direct access to opportunities that matter.
                            Here, you don’t have to stress scrolling endlessly

                        </p>

                        <p>
                            Your dream job might just be one click away. Start exploring with JobEntry today.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='absolut my-4 flex gap-4'>
                        <button type="button" className="py-3  px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border  bg-gray-700 text-white hover:text-dray-700 focus:outline-hidden focus:bg-gray-900 hover:text-gray-700 hover:bg-white disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 cursor-pointer ">
                            Search A Job
                        </button>
                        <button type="button" className="py-3 text-gray-700 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-700 cursor-pointer focus:outline-hidden focus:border-white focus:text-gray-800 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300">
                            Find A Talent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery