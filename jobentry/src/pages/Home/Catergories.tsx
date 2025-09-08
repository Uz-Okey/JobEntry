import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faTaxi, faLandmark, faTruck, faIdCard } from '@fortawesome/free-solid-svg-icons'
import './HomePage.css'
import { useState, useEffect } from 'react';

const Catergories = () => {

    const [section1, setSection1] = useState(false);
    const [section2, setSection2] = useState(false);
    const [section3, setSection3] = useState(false);
    const [section4, setSection4] = useState(false);
    const [section5, setSection5] = useState(false);
    const [section6, setSection6] = useState(false);
    const [section7, setSection7] = useState(false);
    const [section8, setSection8] = useState(false);
    const [section9, setSection9] = useState(false);
    const setRef1 = useRef(null);
    const setRef2 = useRef(null);
    const setRef3 = useRef(null)
    const setRef4 = useRef(null);
    const setRef5 = useRef(null);
    const setRef6 = useRef(null);
    const setRef7 = useRef(null);
    const setRef8 = useRef(null);
    const setRef9 = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === setRef1.current) setSection1(entry.isIntersecting);
                    if (entry.target === setRef2.current) setSection2(entry.isIntersecting);
                    if (entry.target === setRef3.current) setSection3(entry.isIntersecting);
                    if (entry.target === setRef4.current) setSection4(entry.isIntersecting);
                    if (entry.target === setRef5.current) setSection5(entry.isIntersecting);
                    if (entry.target === setRef6.current) setSection6(entry.isIntersecting);
                    if (entry.target === setRef7.current) setSection7(entry.isIntersecting);
                    if (entry.target === setRef8.current) setSection8(entry.isIntersecting);
                    if (entry.target === setRef9.current) setSection9(entry.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );

        if (setRef1.current) observer.observe(setRef1.current);
        if (setRef2.current) observer.observe(setRef2.current);
        if (setRef3.current) observer.observe(setRef3.current);
        if (setRef4.current) observer.observe(setRef4.current);
        if (setRef5.current) observer.observe(setRef5.current);
        if (setRef6.current) observer.observe(setRef6.current);
        if (setRef7.current) observer.observe(setRef7.current);
        if (setRef8.current) observer.observe(setRef8.current);
        if (setRef9.current) observer.observe(setRef9.current);

        return () => observer.disconnect();
    }, []);


    return (
        <div>

            <h1
            ref={setRef9}
                className={ `duration-700 transition-all ease-in-out ${section9 ? 'opacity-100 translate-y-0':'translate-y-20 opacity-0'} text-center p-10 text-2xl md:text-[40px] text-gray-800 font-bold`}
            >Explore By Catergories</h1>
            <div className='grid mt-8 mb-14 w-[80%] md:w-[90%] items-center justify-center mx-auto grid-cols-2 gap-4 space-x-2  md:grid-cols-4'>



                <div ref={setRef1} className={`${section1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex text-start justify-center flex-col bg-white border border-gray-100 hover:border-gray-200 shadow-gray-100 cursor-pointer hover:shadow-2xl rounded-sm transition-all duration-700 ease-out sections`}>
                    <div className="p-7">
                        <div className=' text-3xl icon-color'>
                            <FontAwesomeIcon icon={faMessage} />
                        </div>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">
                            Marketing
                        </p>

                        <a className="mt-3  -mb-9 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent icon-color decoration-2 hover:text-green-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.indeed.com/" target='blank'>
                            5 Jobs vacancy

                        </a>
                    </div>
                </div>

                <div ref={setRef2} className={`${section2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}  transition-all duration-800 ease-in-out flex icon-color text-start justify-center flex-col bg-white border border-gray-100 hover:border-gray-200 shadow-gray-100 cursor-pointer hover:shadow-2xl rounded-sm sections`}>
                    <div className="p-7">
                        <div className=' text-3xl '>
                            <FontAwesomeIcon icon={faTaxi} />
                        </div>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">
                            Taxi Jobs
                        </p>

                        <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent decoration-2 hover:text-green-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://hopintaxi.com/ng/driver/" target='blank'>
                            10 Jobs vacancy

                        </a>
                    </div>
                </div>

                <div ref={setRef3} className={` ${section3 ? "opacity-100 translate-y-0" : 'opacity-0 translate-y-10'} duration-900 ease-in-out transition-all flex icon-color text-start justify-center flex-col bg-white border border-gray-100 hover:border-gray-200 shadow-gray-100 cursor-pointer hover:shadow-2xl rounded-sm sections`}>
                    <div className="p-7">
                        <div className=' text-3xl'>
                            <FontAwesomeIcon icon={faLandmark} />
                        </div>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">
                            Banking Jobs
                        </p>

                        <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent icon-color decoration-2 hover:text-green-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.myjobmag.com/jobs-by-field/banking" target='blank'>
                            15 Jobs vacancy

                        </a>
                    </div>
                </div>

                <div
                    ref={setRef4}
                    className={`${section4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000  ease-out flex icon-color text-start justify-center flex-col bg-white border border-gray-100 hover:border-gray-200 shadow-gray-100 cursor-pointer hover:shadow-2xl rounded-sm sections`}
                >
                    <div className="p-7">
                        <div className=' text-3xl'>
                            <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">Truck Drivers</p>
                        <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent icon-color decoration-2 hover:text-green-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.myjobmag.com/jobs-by-title/truck-driver" target='blank'>
                            2 Jobs vacancy
                        </a>
                    </div>
                </div>

                <div
                    ref={setRef5}
                    className={`${section5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-out flex text-start justify-center flex-col bg-white border border-gray-100 hover:border-gray-200 shadow-gray-100 cursor-pointer hover:shadow-2xl rounded-sm sections`}
                >
                    <div className="p-7">
                        <div className=' text-3xl icon-color'>
                            <FontAwesomeIcon icon={faTaxi} />
                        </div>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">Banking Jobs</p>
                        <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent icon-color decoration-2 hover:text-green-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.glassdoor.com/Job/nigeria-dispatcher-jobs-SRCH_IL.0,7_IN177_KO8,18.htm" target='blank'>
                            15 Jobs vacancy
                        </a>
                    </div>
                </div>

                <div
                    ref={setRef6}
                    className={`${section6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-800 ease-out flex text-start justify-center flex-col bg-white border border-gray-100 hover:border-gray-200 shadow-gray-100 cursor-pointer focus:underline focus:outline-hidden  hover:shadow-2xl rounded-sm sections`}
                >
                    <div className="p-7">
                        <div className=' text-3xl icon-color'>
                            <FontAwesomeIcon icon={faIdCard} />
                        </div>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">Office Jobs</p>
                        <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent icon-color decoration-2 hover:text-green-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500  dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.hotnigerianjobs.com/field/201/" target='blank'>
                            12 Jobs vacancy
                        </a>
                    </div>
                </div>

                <div
                    ref={setRef7}
                    className={`${section7 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-900 ease-out flex text-start justify-center flex-col bg-white border border-gray-100 hover:border-gray-200 shadow-gray-100 cursor-pointer hover:shadow-2xl rounded-sm sections`}
                >
                    <div className="p-7">
                        <div className=' text-3xl icon-color'>
                            <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">Marketing</p>
                        <a className="mt-3 -mb-9 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent icon-color decoration-2 hover:text-green-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.indeed.com/" target='blank'>
                            9 Jobs vacancy
                        </a>
                    </div>
                </div>

                <div
                    ref={setRef8}
                    className={`${section8 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000 ease-out flex text-start justify-center flex-col bg-white border border-gray-100 hover:border-gray-200 shadow-gray-100 cursor-pointer hover:shadow-2xl rounded-sm sections`}
                >
                    <div className="p-7">
                        <div className=' text-3xl icon-color'>
                            <FontAwesomeIcon icon={faMessage} />
                        </div>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">Marketing</p>
                        <a className="mt-3 -mb-9 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent icon-color decoration-2 hover:text-green-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.indeed.com/" target='blank'>
                            21 Jobs vacancy
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Catergories